const test = require('ava');
const { render } = require('alpine-test-utils');

test('test foo component', (t) => {
  const componentHtml = `<div x-data="{foo: 'bar'}">
    <span x-text="foo"></span>
  </div>`
  const component = render(componentHtml);

  t.is(component.querySelector('span').innerText, 'bar');
});
