// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  Sidebar: [
    {
      type: 'category',
      label: 'Arquitectura',
      items: ['backend/arquitectura/arquitecturaMeta','backend/arquitectura/esquema'],
    },
    {
      type: 'doc',
      id: 'backend/estructura/estructura',
      label : 'Estructura del proyecto',
    },
    {
      type: 'doc',
      id: 'backend/requerimientos/requerimientos',
      label : 'Requerimientos',
    },
    {
      type: 'doc',
      id: 'backend/ejecucion/ejecucion',
      label : 'Ejecución',
    },
    {
      type: 'doc',
      id: 'backend/bd/bd',
      label : 'Base de datos',
    },
    {
      type: 'doc',
      id: 'backend/testing/testing',
      label : 'Testing',
    },
  ],   
};

export default sidebars;
