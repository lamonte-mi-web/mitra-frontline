"use client";

import DefaultHeader from "@/components/DefaultHeader";
import DefaultFooter from "@/components/DefaultFooter";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import FloatingButtons from "@/components/FloatingButtons";
// import MouseTether from "@/components/MouseTether";

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {/* <MouseTether /> */}
            <DefaultHeader />
            <ScrollProgressBar />
            {children}
            <DefaultFooter />
            <FloatingButtons />
        </>
    );
}
