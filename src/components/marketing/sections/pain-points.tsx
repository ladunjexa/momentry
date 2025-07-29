import {
  description,
  headerWrapper,
  sectionWrapper,
  subtitle,
  title,
} from "@/components/shared/primitives";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { destructHeadline } from "@/lib/utils";
import { useTranslations } from "next-intl";
import * as React from "react";
import { v4 as uuidv4 } from "uuid";

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <img
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const srcs = [
  "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export default function PainPoints() {
  const t = useTranslations("marketing.pain-points");

  const { headlineWithoutLastWord, lastWord } = destructHeadline(t("headline"));
  const keys = ["item1", "item2", "item3", "item4", "item5", "item6"] as const;

  const cards = keys.map((key, index) => (
    <Card
      key={srcs[index % srcs.length]}
      card={{
        category: t(`bullets.${key}.category`),
        title: t(`bullets.${key}.text`),
        src: srcs[index % srcs.length],
        content: <DummyContent />,
      }}
      index={index}
    />
  ));

  // const cards = t("bullets").map((bullet, index) => (
  //   <Card
  //     key={srcs[index % srcs.length]}
  //     card={{
  //       category: "Category",
  //       title: bullet,
  //       src: srcs[index % srcs.length],
  //       content: <DummyContent />,
  //     }}
  //     index={index}
  //   />
  // ));

  return (
    <main className={sectionWrapper()}>
      <div className={headerWrapper({ className: "space-y-4" })}>
        <div className="flex flex-col items-center justify-center">
          <h1 className={title()}>{headlineWithoutLastWord}</h1>
          <PointerHighlight>
            <h1 className={title()}>{lastWord}</h1>
          </PointerHighlight>
        </div>

        <div>
          <h2 className={subtitle()}>{t("subhead")}</h2>
          {/* <p className={description()}>{t("subhead")}</p> */}
        </div>
      </div>
      <Carousel items={cards} />
    </main>
  );
}
