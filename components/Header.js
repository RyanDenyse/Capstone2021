import html from "html-literal";

export default st => html`
  <div class="header" id="main-header">
    <header>
      <p>${st.header}</p>
    </header>
  </div>
`;
