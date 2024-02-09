import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';
import { format } from '../../utils/utils';

export interface ITestThree {
  value: string[]
  oldValue: string
  testProp: Record<number, string[]>
}

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  /**
   * Test method one returns a boolean
   * @eventProperty
   */
  @Event() testEventOne!: EventEmitter<boolean>;

  /**
   * Test method two returns an object
   * @eventProperty
   */
  @Event() testEventTwo!: EventEmitter<Record<string, number>>;

  /**
   * Test method three returns an object
   * @eventProperty
   */
  @Event() testEventThree!: EventEmitter<ITestThree>;


  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return <div>Hello, World! I'm {this.getText()}</div>;
  }
}
