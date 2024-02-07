import Link from "next/link";

import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";

export default function About() {
  return (
    <main className="text-center text-5xl flex min-h-screen flex-col items-center justify-between p-24">
      <div>Experience</div>

      <div className="items-center">
        <Timeline>
          <TimelineItem>
            <TimelineOppositeContent>
              May 2023 - August 2023
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>R&D Software Developer Intern</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              May 2022 - August 2022
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>REU Intern</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              June 2022 - May 2023
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Program Manager</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              June 2022 - May 2023
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>Program Manager</TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </main>
  );
}
