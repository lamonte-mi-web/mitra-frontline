import { NextRequest, NextResponse } from 'next/server';
import { writeFile, existsSync, appendFileSync } from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import formidable from 'formidable';
import { promisify } from 'util';
import fs, {mkdir} from 'fs/promises';

export const config = {
  api: {
    bodyParser: false,
  },
};

const parseForm = async (req: NextRequest) => {
  const form = new formidable.IncomingForm({ multiples: true });
  const parse = promisify(form.parse);
  const [fields, files] = await parse(req as any);
  return { fields, files };
};

export async function POST(req: Request) {
  try {
    const boundary = req.headers.get('content-type')?.match(/boundary=(.*)$/)?.[1];
    if (!boundary) return NextResponse.json({ error: 'No boundary found' }, { status: 400 });

    const data = await req.formData();
    const uniqueId = uuidv4();
    const submissionDir = path.join(process.cwd(), 'public', 'submissions', uniqueId);

    // Create submission folder
    if (!existsSync(submissionDir)) await mkdir(submissionDir, { recursive: true });

    // Prepare CSV row
    const fields: Record<string, string> = {};
    const uploads: Record<string, string> = {};

    for (const [key, value] of data.entries()) {
      if (value instanceof File) {
        const buffer = Buffer.from(await value.arrayBuffer());
        const filename = `${key}-${value.name}`;
        const filepath = path.join(submissionDir, filename);
        await fs.writeFile(filepath, buffer);
        uploads[key] = `submissions/${uniqueId}/${filename}`;
      } else {
        fields[key] = value.toString();
      }
    }

    const allData = { ...fields, ...uploads };

    // Write CSV
    const csvFile = path.join(process.cwd(), 'public', 'submissions', 'data.csv');
    const headers = Object.keys(allData).join(',');
    const row = Object.values(allData).map((val) => `"${val}"`).join(',');

    if (!existsSync(csvFile)) {
      await fs.writeFile(csvFile, `${headers}\n${row}\n`);
    } else {
      await fs.appendFile(csvFile, `${row}\n`);
    }

    return NextResponse.json({ success: true, folder: uniqueId });
  } catch (error) {
    console.error('[UPLOAD ERROR]', error);
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}
