import React, {useState, useEffect, useContext, Suspense, lazy} from "react";
import "./Project.scss";
import Button from "../../components/button/Button";
import {openSource, socialMediaLinks} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import Loading from "../../containers/loading/Loading";
export default function Projects() {
  const GithubRepoCard = lazy(() =>
    import("../../components/githubRepoCard/GithubRepoCard")
  );
  const FailedLoading = () => null;
  const renderLoader = () => <Loading />;
  // todo: remove useContex because is not supported
  const {isDark} = useContext(StyleContext);

  const opeSourceProjects = [
    {
      node: {
        name: "Yarn-plugin-apt",
        description: "A yarn plugin to resolve node modules installed via apt",
        primaryLanguage: {
          name: "Javascript",
          colr: "yellow"
        },
        url: "https://salsa.debian.org/js-team/yarn-plugin-apt",
        diskUsage: "440kb"
      }
    },
    {
      node: {
        name: "Paste Hub",
        description:
          "A prettified multi-language syntax-highlighting paste bin",
        primaryLanguage: {
          name: "Javascript",
          colr: "yellow"
        },
        url: "https://github.com/sunny775/paste-hub",
        diskUsage: "2500kb"
      }
    }
  ];

  if (openSource.display) {
    return (
      <Suspense fallback={renderLoader()}>
        <div className="main" id="opensource">
          <h1 className="project-title">Open Source Projects</h1>
          <div className="repo-cards-div-main">
            {opeSourceProjects.map((v, i) => {
              return (
                <GithubRepoCard
                  repo={v}
                  key={i + v.node.name}
                  isDark={isDark}
                />
              );
            })}
          </div>
          <Button
            text={"More Projects"}
            className="project-button"
            href={socialMediaLinks.github}
            newTab={true}
          />
        </div>
      </Suspense>
    );
  } else {
    return <FailedLoading />;
  }
}
