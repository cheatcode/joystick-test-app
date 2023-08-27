import test from '@joystick.js/test';

test.that('index route (/) renders as expected', async (assert = {}) => {
  const response = await test.routes.get('/');
  assert.is(
    response?.body?.includes('A full-stack JavaScript framework for building web apps and websites.'),
    true
  );
});

test.that('/page route renders as expected without layout', async (assert = {}) => {
  const response = await test.routes.get('/page');
  assert.is(
    response?.body?.includes('A full-stack JavaScript framework for building web apps and websites.'),
    true
  );
});

test.that('/layout route renders as expected with layout', async (assert = {}) => {
  const response = await test.routes.get('/layout');
  assert.is(
    response?.body?.includes('A full-stack JavaScript framework for building web apps and websites.'),
    true
  );
});

test.that('/layout route renders as expected with user', async (assert = {}) => {
  const user = await test.accounts.signup({
    emailAddress: 'test@test.com',
    password: 'password',
  });
  
  const response = await test.routes.get('/layout', {
    user,
  });
  
  assert.is(
    response?.body?.includes('test@test.com'),
    true
  );
});

test.that('/redirect route redirects to index route (/)', async (assert = {}) => {
  const response = await test.routes.get('/redirect');
  assert.is(
    response?.body?.includes('A full-stack JavaScript framework for building web apps and websites.'),
    true
  );
});

test.that('/public route does not redirect without user', async (assert = {}) => {
  const response = await test.routes.get('/public');

  assert.is(
    response?.body?.includes('Must be logged out to see this page.'),
    true
  );
});

test.that('/public route redirects as expected with user', async (assert = {}) => {
  const user = await test.accounts.signup({
    emailAddress: 'test@test.com',
    password: 'password',
  });

  const response = await test.routes.get('/public', {
    user,
  });

  assert.is(
    response?.body?.includes('Must be logged in to see this page.'),
    true
  );
});

test.that('/authenticated route renders as expected with user', async (assert = {}) => {
  const user = await test.accounts.signup({
    emailAddress: 'test@test.com',
    password: 'password',
  });

  const response = await test.routes.get('/authenticated', {
    user,
  });

  assert.is(
    response?.body?.includes('Must be logged in to see this page.'),
    true
  );
});

test.that('/authenticated route redirects as expected without user', async (assert = {}) => {
  const response = await test.routes.get('/authenticated');

  assert.is(
    !response?.body?.includes('Must be logged in to see this page.'),
    true
  );
});

test.that('404 route (*) renders as expected', async (assert = {}) => {
  const response = await test.routes.get('/thisroutedoesnotexist');
  assert.is(
    response?.body?.includes('Page Not Found'),
    true
  );
});
