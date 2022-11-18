import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: "Easy to Use",
    imageUrl: "img/undraw_maintenance.svg",
    description: (
      <>
        A11yWatch was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: "Focus on What Matters",
    imageUrl: "img/undraw_pedestrian_crossing.svg",
    description: (
      <>
        A11yWatch lets you focus on your development, and we&apos;ll do the
        chores. Get notified instantly as new issues occur on your website.
      </>
    ),
  },
  {
    title: "Powered by Humans & AI",
    imageUrl: "img/undraw_web_browsing.svg",
    description: (
      <>
        Extend or customize your website layout by reusing React. A11yWatch can
        be extended and customized, use the services you need to help your use
        case.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img
            className={styles.featureImage}
            src={imgUrl}
            alt={title}
            width={51.8}
            height={32}
          />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = { title: "", tagline: "" } } = context;
  return (
    <Layout
      title={`Need help?`}
      description={`${siteConfig.title} documentation on how to install and use the project.`}
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <h2 className="hero__subtitle">{siteConfig.tagline}</h2>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--secondary getStarted button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("documentation/")}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
