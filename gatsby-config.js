/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

module.exports = {
  pathPrefix: process.env.PATH_PREFIX || '/express/',
  siteMetadata: {
    "home": {
      "title": "Products",
      "path": "https://developer.adobe.com/apis"
    },
    pages: [
      {
        title: 'Adobe Express',
        path: '/'
      },
      {
        title: 'Add-ons',
        path: '/express/add-ons'
      },
      {
        title: 'Embed SDK',
        path: '/express/embed-sdk'
      },
      {
        title: 'Documentation',
        menu: [
          {
            title: 'Add-ons',
            path: 'https://developer.adobe.com/express/add-ons/docs/guides/'
          },
          {
            title: 'Embed SDK',
            path: 'https://developer.adobe.com/express/embed-sdk/docs/guides/'
          },
        ]
      },
      {
        title: 'Community', 
        path: 'https://developer.adobe.com/express/community/'
      },
      {
        title: 'Fund for Design', 
        path: 'https://developers.adobe.com/fund-for-design'
      }
    ],
  },
  plugins: [`@adobe/gatsby-theme-aio`]
};
