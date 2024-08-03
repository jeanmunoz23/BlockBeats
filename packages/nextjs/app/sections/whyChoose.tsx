import React from "react";
import { TargetCard } from "~~/components/targetCard";

export default function WhyChoose() {
  return (
    <section>
      <div>
        <h2>Why Choose Our Platform?</h2>
        <h5>Designed for everyone in the music ecosystem</h5>
      </div>
      <div className="md:flex">
        <TargetCard
          counter_text="01/"
          text="For Musicians & Producers
Collaborate and monetize your work"
        />
        <TargetCard
          counter_text="01/"
          text="For Musicians & Producers
Collaborate and monetize your work"
        />
        <TargetCard
          counter_text="01/"
          text="For Musicians & Producers
Collaborate and monetize your work"
        />
      </div>
    </section>
  );
}
