/*
 * MIT License
 *
 * Copyright (c) 2022 JabDoesThings
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.ISUI {
    export abstract class ISDPadWheels {
      static [id: string]: any;

      /** @noSelf */
      static onDisplayDown: (joypadData: any) => any;

      /** @noSelf */
      static onDisplayLeft: (joypadData: any) => any;

      /** @noSelf */
      static onDisplayRight: (joypadData: any) => any;

      /** @noSelf */
      static onDisplayUp: (joypadData: any) => any;

      /** @noSelf */
      static onEquipPrimary: (playerObj: any, item: any) => any;

      /** @noSelf */
      static onShout: (playerObj: any) => any;

      /** @noSelf */
      static onToggleLight: (playerObj: any, item: any) => any;
    }
  }
  export namespace lua.client.ISUI.ISDPadWheels {}
}