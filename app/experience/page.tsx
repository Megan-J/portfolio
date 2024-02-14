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
            <TimelineContent>
              <h3>Software Developer Intern</h3>
              <div>
                <span>Research and Development | San Leandro, CA</span>
                <br />
              </div>
              <ul>
                <li>
                  Created and managed cloud services’ resources to fix failing
                  e2e tests for microservices in development cluster
                </li>
                <li>
                  Implemented exception handling of network errors and retry
                  logic to improve unit, e2e, and product integration tests, in
                  C#
                </li>
                <li>
                  Built CI pipeline for building solutions, running unit and
                  functionality tests, uploading Docker container images, and
                  publishing them to Azure Container Registry using Azure
                  DevOps, YAML, and Visual Studio
                </li>
                <li>
                  Removed ServiceFabric dependencies and ported NuGet packages
                  of current microservices for migrating cloud services from
                  ServiceFabric to Kubernetes and Dapr
                </li>
                <li>
                  Deployed updates to production environment using Azure CICD
                  pipelines
                </li>
              </ul>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              May 2022 - August 2022
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <h3>REU Intern</h3>
              <div>
                <span>
                  University of Southern California Institute for Creative
                  Technologies | Los Angeles, CA
                </span>
                <br />
              </div>
              <ul>
                <li>
                  Designed custom ReactJS components to reduce confusion and
                  guide users through the process of creating virtual agents
                  that would simulate real-time face-to-face conversations
                  through video recordings
                </li>
                <li>
                  Reduced query time from MongoDB through the use of Redux
                </li>
                <li>
                  Optimized the way that users can improve their virtual agents
                  by creating a priority queue recommendation algorithm based on
                  weighted user data using TypeScript
                </li>
                <li>
                  Created end-to-end use cases to test functionality via Cypress
                </li>
              </ul>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              June 2022 - May 2023
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <h3>Program Manager</h3>
              <div>
                <span>
                  {" "}
                  Society of Asian Scientists and Engineers | San Jose, CA
                </span>
                <br />
              </div>
              <ul>
                <li>
                  Improved cornerstone industry skill-gaining program, resulting
                  in 20% increase in participant satisfaction and 15% increase
                  in skill acquisition
                </li>
                <li>
                  Conducted interviews with potential participants to asses
                  interests, skill levels, and commitment
                </li>
                <li>
                  Analyzed group dynamics and proactively resolved conflicts,
                  resulting in enhanced teamwork and improved project outcomes
                </li>
                <li>
                  Developed and implemented training workshops to address skill
                  gaps identified among participants, resulting in improved
                  performance
                </li>
                <li>
                  Monitored program progress and made adjustments to optimize
                  effectiveness
                </li>
              </ul>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              October 2021 - May 2023
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>
              <h3>Development Team Officer</h3>
              <div>
                <span>
                  {" "}
                  Software and Computer Engineering Society SJSU | San Jose, CA
                </span>
                <br />
              </div>
              <ul>
                <li>
                  Implemented and designed ReactJS components to update
                  organization web pages
                </li>
                <li>
                  Fixed faulty login verification issue by changing a user’s
                  role upon creating an account using ExpressJS, NodeJS, and
                  MongoDB
                </li>
                <li>
                  Optimized printing function by implementing sticky load
                  balancing function for the organization website through
                  JavaScript
                </li>
                <li>Recruited new members and student leaders</li>
              </ul>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </main>
  );
}
