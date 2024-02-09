# Interface: MyComponent

## Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `first?` | `string` | The first name |
| `last?` | `string` | The last name |
| `middle?` | `string` | The middle name |

## Events

| Event | Type | Description |
| :------ | :------ | :------ |
| `onTestEventOne?` | (`event`: [`MyComponentCustomEvent`](../../../interfaces/MyComponentCustomEvent.md)< `boolean` \>) => `void` | Test method one returns a boolean |
| `onTestEventThree?` | (`event`: [`MyComponentCustomEvent`](../../../interfaces/MyComponentCustomEvent.md)< [`ITestThree`](../../../interfaces/ITestThree.md) \>) => `void` | Test method three returns an object |
| `onTestEventTwo?` | (`event`: [`MyComponentCustomEvent`](../../../interfaces/MyComponentCustomEvent.md)< `Record`< `string`, `number` \> \>) => `void` | Test method two returns an object |
