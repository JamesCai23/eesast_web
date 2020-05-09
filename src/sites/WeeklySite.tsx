import React, { useEffect } from "react";
import { Route, Switch } from "react-router";
import { Site } from "../App";
import FeedPage from "../pages/ArticleFeedPage";
import { WithRouterComponent } from "../types/WithRouterComponent";
import ArticlePage from "../pages/ArticlePage";
import ArticleEditPage from "../pages/ArticleEditPage";
import ArticleManagePage from "../pages/ArticleManagePage";
import AuthRoute from "../components/AuthRoute";

export interface IWeeklySiteProps {
  setSite: (site: Site) => void;
}

const WeeklySite: React.FC<WithRouterComponent<{}, IWeeklySiteProps>> = ({
  setSite,
  match,
}) => {
  useEffect(() => {
    setSite("weekly");
  }, [setSite]);

  return (
    <Switch>
      <Route exact={true} path={`${match.path}`} component={FeedPage} />
      <Route
        exact
        path={`${match.path}/articles/:alias`}
        component={ArticlePage}
      />
      <AuthRoute
        exact
        path={`${match.path}/edit`}
        component={ArticleEditPage}
      />
      <AuthRoute
        exact
        path={`${match.path}/manage`}
        component={ArticleManagePage}
      />
    </Switch>
  );
};

export default WeeklySite;
