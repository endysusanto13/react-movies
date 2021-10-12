import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './index.css';

import { AuthProvider } from "domains/auth";

import { LoginPage } from "./pages/login";
import { RegisterPage } from "./pages/register";
import { Movies } from "./pages/movies";
import { MovieDetailsPage } from "./pages/movie-details";
import { PageNotFound } from "./pages/404";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000,
    },
  },
});

ReactDOM.render(
<BrowserRouter>
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/movie/:movieId">
          <MovieDetailsPage />
        </Route>
        <Route path="/" exact>
          <Movies />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </AuthProvider>
  </QueryClientProvider>
</BrowserRouter>
  ,document.querySelector("#root")
);
