import '.';

import { Story } from '@storybook/web-components';
import { html } from 'lit-html';

export default {
  id: 'uui-form-validation-message',
  title: 'Inputs/Form/Form Validation Message',
  component: 'uui-form-validation-message',
};

export const AAAOverview: Story = () =>
  html`<uui-form-validation-message>
    <uui-input
      id="phoneInput"
      type="text"
      name="phone"
      placeholder="+00"
      required
      required-message="You must enter a area code"
      style="text-align:right; width: 75px;">
    </uui-input>
    <uui-input
      type="text"
      name="phone"
      placeholder=""
      required
      required-message="You must enter a phone number">
    </uui-input>
  </uui-form-validation-message>`;
AAAOverview.storyName = 'Overview';

export const ForAnotherElement: Story = () =>
  html` <p>
      The Form Validation Message element can also display validation messages
      from another element than it self. This is done by setting the 'for'
      attribute.
    </p>
    <div id="myCustomScope">
      <uui-input
        id="phoneInput"
        type="text"
        name="phone"
        placeholder="+00"
        required
        required-message="You must enter a area code"
        style="text-align:right; width: 75px;">
      </uui-input>
      <uui-input
        type="text"
        name="phone"
        placeholder=""
        required
        required-message="You must enter a phone number">
      </uui-input>
    </div>
    <uui-form-validation-message for="myCustomScope">
    </uui-form-validation-message>`;
ForAnotherElement.parameters = {
  docs: {
    source: {
      code: `<uui-input for="ElementID | JSElementReference"></uui-input>`,
    },
  },
};
