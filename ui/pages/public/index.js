import ui from '@joystick.js/ui';

const PublicPage = ui.component({
  render: () => {
    return `
      <div>
        <p>Must be logged out to see this page.</p>
      </div>
    `;
    },
});

export default PublicPage;
