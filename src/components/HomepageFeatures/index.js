import Link from "@docusaurus/Link";
import clsx from "clsx";
import React from "react";

import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Built for simplicity",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Xyter is built for privacy and simplicity. By replacing all bots with one will make guilds less cluttered and easier to manage.
      </>
    ),
  },
  {
    title: "TypeScript",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        By using TypeScript, the code is easier to understand and contribute to, bug fixes are easier to find too.
      </>
    ),
  },
  {
    title: "On-premise or Cloud",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        If you would like to run it on-premise instead of <Link className="text--warning" to="https://bot.zyner.org">
          us hosting it for you
        </Link>,
        then you can follow our{" "}
        <Link className="text--warning" to="https://github.com/ZynerOrg/xyter">
          this guide
        </Link>
        .
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
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
          ))
}
</div>
      </div>< /section>
  );
}
