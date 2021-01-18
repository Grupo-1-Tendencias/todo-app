import React from "react";

function Layout({ title = "To Do", children }) {
  return (
    <div className="App">
      <main role="main">
        <header data-testid="header" className="App-header">
          {title}
        </header>
        <div data-testid="body" className="App-body">
          {children}
        </div>
      </main>
    </div>
  );
}

export default Layout;
