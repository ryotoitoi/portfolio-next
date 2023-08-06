import React from 'react';

const Projects = () => {
  return (
    <div>
      <h1>私のプロジェクト</h1>
      <ul>
        <li>
          <h2>プロジェクト1</h2>
          <p>このプロジェクトは、[プロジェクトの説明]です。</p>
        </li>
        <li>
          <h2>プロジェクト2</h2>
          <p>このプロジェクトは、[プロジェクトの説明]です。</p>
        </li>
        {/* 他のプロジェクトの情報も同様に追加できます */}
      </ul>
    </div>
  );
};

export default Projects;
