"use client";

import ScrollSection from "./ScrollSection";

export default function Section3Narrative() {
  return (
    <ScrollSection>
      <h2>Career Narrative</h2>
      <div className="timeline">
        <div className="timeline-item">
          <div className="year">Creative roots</div>
          <div>
            <h3>Photography and graphic design</h3>
            <p>
              Jose built his foundation in visual culture through Photography
              and Graphic Design studies at ARCOS in Chile. This background
              continues to inform the way he approaches user experience, layout,
              interface, and brand presence.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="year">2009</div>
          <div>
            <h3>Estudio Viento del Sur</h3>
            <p>
              He founded Estudio Viento del Sur as a digital solutions studio
              focused on web development, CMS management, digital strategy, and
              client autonomy. The studio became a vehicle for independent,
              remote, and cross-border digital work.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="year">Chile / Australia</div>
          <div>
            <h3>A trans-Pacific working model</h3>
            <p>
              By operating between Valparaiso and Sydney, Jose developed a
              professional model that combined Chilean creative flexibility with
              Australian technical expectations. This positioned him as a bridge
              between markets, cultures, and ways of working.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="year">Ongoing</div>
          <div>
            <h3>Continuous reinvention</h3>
            <p>
              Jose&apos;s career has continued to evolve through software
              programming, JavaScript, web systems, content platforms, and
              modern digital workflows. His profile is defined by constant
              learning rather than a fixed professional label.
            </p>
          </div>
        </div>
      </div>
    </ScrollSection>
  );
}
