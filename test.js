const test = require('ava');
const { render, load, setGlobal } = require('alpine-test-utils');
const { app } = require("./app")

test('click start button to start typing', async (t) => {
  const markup = await load("./index.html")
  setGlobal({ app });
  const component = render(markup);

  t.is(component.$data.started, false)

  component.$data.$refs.startButton.click()
  component.$data.type()

  t.is(component.$data.started, true)
});
