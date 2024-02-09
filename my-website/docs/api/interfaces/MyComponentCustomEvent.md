# Interface: MyComponentCustomEvent<T\>

## Extends

- `CustomEvent`< `T` \>

## Type parameters

| Type parameter |
| :------ |
| `T` |

## Properties

| Property | Modifier | Type | Description | Overrides | Inherited from |
| :------ | :------ | :------ | :------ | :------ | :------ |
| `AT_TARGET` | `readonly` | `2` | - | `CustomEvent.AT_TARGET` | `CustomEvent.AT_TARGET` |
| `BUBBLING_PHASE` | `readonly` | `3` | - | `CustomEvent.BUBBLING_PHASE` | `CustomEvent.BUBBLING_PHASE` |
| `CAPTURING_PHASE` | `readonly` | `1` | - | `CustomEvent.CAPTURING_PHASE` | `CustomEvent.CAPTURING_PHASE` |
| `NONE` | `readonly` | `0` | - | `CustomEvent.NONE` | `CustomEvent.NONE` |
| `bubbles` | `readonly` | `boolean` | Returns true or false depending on how event was initialized. True if event goes through its target's ancestors in reverse tree order, and false otherwise.<br /><br />[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/bubbles) | `CustomEvent.bubbles` | `CustomEvent.bubbles` |
| ~~`cancelBubble`~~ | `public` | `boolean` | **Deprecated**<br />[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/cancelBubble) | `CustomEvent.cancelBubble` | `CustomEvent.cancelBubble` |
| `cancelable` | `readonly` | `boolean` | Returns true or false depending on how event was initialized. Its return value does not always carry meaning, but true can indicate that part of the operation during which event was dispatched, can be canceled by invoking the preventDefault() method.<br /><br />[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/cancelable) | `CustomEvent.cancelable` | `CustomEvent.cancelable` |
| `composed` | `readonly` | `boolean` | Returns true or false depending on how event was initialized. True if event invokes listeners past a ShadowRoot node that is the root of its target, and false otherwise.<br /><br />[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/composed) | `CustomEvent.composed` | `CustomEvent.composed` |
| `currentTarget` | `readonly` | `EventTarget` | Returns the object whose event listener's callback is currently being invoked.<br /><br />[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/currentTarget) | `CustomEvent.currentTarget` | `CustomEvent.currentTarget` |
| `defaultPrevented` | `readonly` | `boolean` | Returns true if preventDefault() was invoked successfully to indicate cancelation, and false otherwise.<br /><br />[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/defaultPrevented) | `CustomEvent.defaultPrevented` | `CustomEvent.defaultPrevented` |
| `detail` | `public` | `T` | - | `CustomEvent.detail` | `CustomEvent.detail` |
| `eventPhase` | `readonly` | `number` | Returns the event's phase, which is one of NONE, CAPTURING_PHASE, AT_TARGET, and BUBBLING_PHASE.<br /><br />[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/eventPhase) | `CustomEvent.eventPhase` | `CustomEvent.eventPhase` |
| `isTrusted` | `readonly` | `boolean` | Returns true if event was dispatched by the user agent, and false otherwise.<br /><br />[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/isTrusted) | `CustomEvent.isTrusted` | `CustomEvent.isTrusted` |
| ~~`returnValue`~~ | `public` | `boolean` | **Deprecated**<br />[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/returnValue) | `CustomEvent.returnValue` | `CustomEvent.returnValue` |
| ~~`srcElement`~~ | `readonly` | `EventTarget` | **Deprecated**<br />[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/srcElement) | `CustomEvent.srcElement` | `CustomEvent.srcElement` |
| `target` | `public` | `HTMLMyComponentElement` | - | `CustomEvent.target` | `CustomEvent.target` |
| `timeStamp` | `readonly` | `number` | Returns the event's timestamp as the number of milliseconds measured relative to the time origin.<br /><br />[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/timeStamp) | `CustomEvent.timeStamp` | `CustomEvent.timeStamp` |
| `type` | `readonly` | `string` | Returns the type of event, e.g. "click", "hashchange", or "submit".<br /><br />[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/type) | `CustomEvent.type` | `CustomEvent.type` |

## Methods

### composedPath()

> **composedPath**(): `EventTarget`[]

Returns the invocation target objects of event's path (objects on which listeners will be invoked), except for any nodes in shadow trees of which the shadow root's mode is "closed" that are not reachable from event's currentTarget.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/composedPath)

#### Returns

`EventTarget`[]

#### Inherited from

`CustomEvent.composedPath`

#### Source

my-website/node\_modules/typescript/lib/lib.dom.d.ts:8071

***

### ~~initCustomEvent()~~

> **initCustomEvent**(`type`, `bubbles`?, `cancelable`?, `detail`?): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `type` | `string` |
| `bubbles`? | `boolean` |
| `cancelable`? | `boolean` |
| `detail`? | `T` |

#### Returns

`void`

#### Inherited from

`CustomEvent.initCustomEvent`

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CustomEvent/initCustomEvent)

#### Source

my-website/node\_modules/typescript/lib/lib.dom.d.ts:5919

***

### ~~initEvent()~~

> **initEvent**(`type`, `bubbles`?, `cancelable`?): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `type` | `string` |
| `bubbles`? | `boolean` |
| `cancelable`? | `boolean` |

#### Returns

`void`

#### Inherited from

`CustomEvent.initEvent`

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/initEvent)

#### Source

my-website/node\_modules/typescript/lib/lib.dom.d.ts:8077

***

### preventDefault()

> **preventDefault**(): `void`

If invoked when the cancelable attribute value is true, and while executing a listener for the event with passive set to false, signals to the operation that caused event to be dispatched that it needs to be canceled.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/preventDefault)

#### Returns

`void`

#### Inherited from

`CustomEvent.preventDefault`

#### Source

my-website/node\_modules/typescript/lib/lib.dom.d.ts:8083

***

### stopImmediatePropagation()

> **stopImmediatePropagation**(): `void`

Invoking this method prevents event from reaching any registered event listeners after the current one finishes running and, when dispatched in a tree, also prevents event from reaching any other objects.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/stopImmediatePropagation)

#### Returns

`void`

#### Inherited from

`CustomEvent.stopImmediatePropagation`

#### Source

my-website/node\_modules/typescript/lib/lib.dom.d.ts:8089

***

### stopPropagation()

> **stopPropagation**(): `void`

When dispatched in a tree, invoking this method prevents event from reaching any objects other than the current object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/stopPropagation)

#### Returns

`void`

#### Inherited from

`CustomEvent.stopPropagation`

#### Source

my-website/node\_modules/typescript/lib/lib.dom.d.ts:8095
