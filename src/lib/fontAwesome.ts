// fontawesome.ts (create this in /lib or /utils)

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;


import { library } from '@fortawesome/fontawesome-svg-core';
import { faChartBar, faUsers, faChartLine, faArrowUp } from '@fortawesome/free-solid-svg-icons';


library.add(faChartBar, faUsers, faChartLine, faArrowUp);
