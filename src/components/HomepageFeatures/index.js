import Link from "@docusaurus/Link";
import clsx from "clsx";
import React from "react";

import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Easy to Use",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Xyter is built to provide you with one bot for your whole guild. <br />
        <br />
        All settings are available via <code>/settings</code> in discord.
      </>
    ),
  },
  {
    title: "Built with Typescript",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        <b>We ❤️ open source</b> and Typescript makes it easier to understand
        code and makes contributions easier and bug fixes easier.
      </>
    ),
  },
  {
    title: "On-premise is available",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        If you would like to run it on-premise instead of us hosting it for you,
        then you can follow our{" "}
        <Link className="text--warning" to="https://github.com/ZynerOrg/xyter">
          this guide
        </Link>
        .
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
