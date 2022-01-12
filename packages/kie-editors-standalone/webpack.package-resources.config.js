/*
 * Copyright 2020 Red Hat, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const { merge } = require("webpack-merge");
const common = require("@kie-tooling-core/webpack-base/webpack.common.config");
const path = require("path");
const buildEnv = require("@kogito-tooling/build-env");

module.exports = (env) =>
  merge(common(env), {
    output: {
      path: path.join(__dirname, "dist"),
      filename: "[name]/index.js",
      library: ["[name]", "Editor"],
      libraryTarget: "umd",
    },
    entry: {
      dmn: "./src/dmn/index.ts",
      bpmn: "./src/bpmn/index.ts",
    },
    devServer: {
      historyApiFallback: false,
      disableHostCheck: true,
      watchContentBase: true,
      contentBase: [path.join(__dirname, "./dist")],
      compress: true,
      port: buildEnv.standaloneEditors.dev.port,
    },
  });
