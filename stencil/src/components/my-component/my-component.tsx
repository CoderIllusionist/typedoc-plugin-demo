import { Component, Prop, h, Event, EventEmitter, Method } from '@stencil/core';
import { format } from '../../utils/utils';

export interface AnotherInterface {
  error: boolean | string[]
}


export interface ITestThree {
  value: string[]
  oldValue: string
  testProp: Record<number, string[]>
  error: AnotherInterface
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
   * this should not sort alphabetically. See docusaurus.config.ts
   */
  @Prop() aProp: string;

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

  /**
   * Test method.
   */
  @Method() 
  async doStuff(): Promise<void> {
    console.log('check!')
  }


  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return <div>Hello, World! I'm {this.getText()}</div>;
  }
}
