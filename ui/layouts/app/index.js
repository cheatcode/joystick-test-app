import ui from "@joystick.js/ui";

const App = ui.component({
  render: ({ props, component, when, user }) => {
    return `
      <div>
        <header>
          ${when(user, `<p>${user?.emailAddress}</p>`)}
        </header>
        ${component(props.page, props)}
      </div>
    `;
  },
});

export default App;
