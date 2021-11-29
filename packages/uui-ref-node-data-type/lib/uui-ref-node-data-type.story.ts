import { Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { ArrayOfUmbracoWords } from '../../../src/helper/UmbracoWordGenerator';
import './index';

export default {
  id: 'uui-ref-node-data-type',
  title: 'Displays/References/Data Type',
  component: 'uui-ref-node-data-type',
};

const Template: Story = props => html`
  <div style="max-width: 420px;">
    <uui-ref-node-data-type
      name="${props.name}"
      icon="${props.icon}"
      alias="${props.alias}"
      ?selectable=${props.selectable}
      ?error=${props.error}
      ?disabled=${props.disabled}>
      <uui-action-bar slot="actions">
        <uui-button label="Remove">Remove</uui-button>
      </uui-action-bar>
    </uui-ref-node-data-type>
  </div>
`;

export const AAAOverview = Template.bind({});
AAAOverview.args = {
  name: 'TextField',
  icon: 'bug',
  alias: 'Umbraco.TextField',
};
AAAOverview.storyName = 'Overview';
AAAOverview.parameters = {
  docs: {
    source: {
      code: `
<uui-ref-node-data-type
  name="TextField"
  icon="bug"
  alias="Umbraco.TextField">
  <uui-action-bar slot="actions">
    <uui-button label="Remove">Remove</uui-button>
  </uui-action-bar>
</uui-ref-node-data-type>
    `,
    },
  },
};

export const Border: Story = () => html`
  <div style="max-width: 420px;">
    <uui-ref-node-data-type
      border
      name="TextField"
      icon="bug"
      alias="Umbraco.TextField">
      <uui-action-bar slot="actions">
        <uui-button label="Remove">Remove</uui-button>
      </uui-action-bar>
    </uui-ref-node-data-type>
  </div>
`;

Border.parameters = {
  docs: {
    source: {
      code: `
<uui-ref-node-data-type
  border
  name="TextField"
  icon="bug"
  alias="Umbraco.TextField">
  <uui-action-bar slot="actions">
    <uui-button label="Remove">Remove</uui-button>
  </uui-action-bar>
</uui-ref-node-data-type>
    `,
    },
  },
};

export const Selectable: Story = props => html`
  <div style="max-width: 420px;">
    <uui-ref-node-data-type
      ?selectable="${props.selectable}"
      name="TextField"
      icon="bug"
      alias="Umbraco.TextField">
      <uui-action-bar slot="actions">
        <uui-button label="Remove">Remove</uui-button>
      </uui-action-bar>
    </uui-ref-node-data-type>
  </div>
`;

Selectable.args = {
  selectable: true,
};

Selectable.parameters = {
  docs: {
    source: {
      code: `
<uui-ref-node-data-type
  selectable
  name="TextField"
  icon="bug"
  alias="Umbraco.TextField">
  <uui-action-bar slot="actions">
    <uui-button label="Remove">Remove</uui-button>
  </uui-action-bar>
</uui-ref-node-data-type>
    `,
    },
  },
};

export const Disabled: Story = props => html`
  <div style="max-width: 420px;">
    <uui-ref-node-data-type
      ?disabled="${props.disabled}"
      name="TextField"
      icon="bug"
      alias="Umbraco.TextField">
      <uui-action-bar slot="actions">
        <uui-button label="Remove">Remove</uui-button>
      </uui-action-bar>
    </uui-ref-node-data-type>
  </div>
`;

Disabled.args = {
  disabled: true,
};

Disabled.parameters = {
  docs: {
    source: {
      code: `
<uui-ref-node-data-type
  disabled
  name="TextField"
  icon="bug"
  alias="Umbraco.TextField">
  <uui-action-bar slot="actions">
    <uui-button label="Remove">Remove</uui-button>
  </uui-action-bar>
</uui-ref-node-data-type>
    `,
    },
  },
};

const listOfNodeNames: string[] = ArrayOfUmbracoWords(10);
export const Listed: Story = () => html`
  <uui-ref-list style="max-width: 420px;">
    ${listOfNodeNames.map(
      name => html`<uui-ref-node-data-type
        name=${name}
        icon="bug"
        alias="Umbraco.TextField">
        <uui-action-bar slot="actions">
          <uui-button label="Remove">Remove</uui-button>
        </uui-action-bar>
      </uui-ref-node-data-type>`
    )}
  </uui-ref-list>
`;

Listed.parameters = {
  docs: {
    source: {
      code: `
<uui-ref-list>
  
  <uui-ref-node-data-type name="Data Type 1" icon="bug" alias="Umbraco.TextField">
    <uui-action-bar slot="actions">
      <uui-button label="Remove">Remove</uui-button>
    </uui-action-bar>
  </uui-ref-node-data-type>

  <uui-ref-node-data-type name="Data Type 2" icon="bug" alias="Umbraco.TextField">
    <uui-action-bar slot="actions">
      <uui-button label="Remove">Remove</uui-button>
    </uui-action-bar>
  </uui-ref-node-data-type>

  <uui-ref-node-data-type name="Data Type 3" icon="bug" alias="Umbraco.TextField">
    <uui-action-bar slot="actions">
      <uui-button label="Remove">Remove</uui-button>
    </uui-action-bar>
  </uui-ref-node-data-type>

</uui-ref-list>
    `,
    },
  },
};
