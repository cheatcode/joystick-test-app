import ui from '@joystick.js/ui';

const AuthenticatedPage = ui.component({
  render: () => {
    return `
      <div>
        <p>Must be logged in to see this page.</p>
      </div>
    `;
    },
});

export default AuthenticatedPage;
