"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/constants";
import { useTheme } from "next-themes";
import React from "react";
import { useTranslations } from "next-intl";

export default function Experience() {
  const { theme } = useTheme();
  const t = useTranslations("Experience");
  const items = t.raw("items") as Array<{
    title: string;
    location: string;
    description: string;
    date: string;
  }>;

  return (
    <section id="experience" className="mb-28 scroll-mt-28 sm:mb-40">
      <h2 className="mb-8 text-center text-3xl font-bold">{t("title")}</h2>
      <VerticalTimeline lineColor="#e5e7eb">
        {experiencesData.map((exp, idx) => {
          const item = items[idx];
          if (!item) return null;
          return (
            <React.Fragment key={exp.id}>
              <VerticalTimelineElement
                contentStyle={{
                  background:
                    theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                  boxShadow: "none",
                  border: "1px solid rgba(0,0,0,0.05)",
                  textAlign: "left",
                  padding: "1.3rem  2rem",
                }}
                contentArrowStyle={{
                  borderRight:
                    theme === "light"
                      ? "0.4rem solid  #9ca3af"
                      : "0.4rem solid rgba(255, 255, 255,0.5)",
                }}
                date={item.date}
                icon={exp.icon}
                iconStyle={{
                  background:
                    theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                  fontSize: "1.5rem",
                }}
              >
                <h3 className="font-semibold text-neutral-900 capitalize dark:text-white">
                  {item.title}
                </h3>
                <p className="!mt-0 font-normal text-neutral-500 dark:text-neutral-400">
                  {item.location}
                </p>
                <p className="!mt-1 !font-normal text-neutral-700 dark:text-neutral-300">
                  {item.description}
                </p>
              </VerticalTimelineElement>
            </React.Fragment>
          );
        })}
      </VerticalTimeline>
    </section>
  );
}
