/**
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
 *
 */

/** @noResolution @noSelfInFile */
/// <reference path="../reference.d.ts" />
declare module 'PipeWrench' {
  export namespace zombie.characterTextures {
    /** [ENUM] zombie.characterTextures.BloodBodyPartType */
    export class BloodBodyPartType {
      protected constructor();
      static readonly Back: zombie.characterTextures.BloodBodyPartType;
      static readonly Foot_L: zombie.characterTextures.BloodBodyPartType;
      static readonly Foot_R: zombie.characterTextures.BloodBodyPartType;
      static readonly ForeArm_L: zombie.characterTextures.BloodBodyPartType;
      static readonly ForeArm_R: zombie.characterTextures.BloodBodyPartType;
      static readonly Groin: zombie.characterTextures.BloodBodyPartType;
      static readonly Hand_L: zombie.characterTextures.BloodBodyPartType;
      static readonly Hand_R: zombie.characterTextures.BloodBodyPartType;
      static readonly Head: zombie.characterTextures.BloodBodyPartType;
      static readonly LowerLeg_L: zombie.characterTextures.BloodBodyPartType;
      static readonly LowerLeg_R: zombie.characterTextures.BloodBodyPartType;
      static readonly MAX: zombie.characterTextures.BloodBodyPartType;
      static readonly Neck: zombie.characterTextures.BloodBodyPartType;
      static readonly Torso_Lower: zombie.characterTextures.BloodBodyPartType;
      static readonly Torso_Upper: zombie.characterTextures.BloodBodyPartType;
      static readonly UpperArm_L: zombie.characterTextures.BloodBodyPartType;
      static readonly UpperArm_R: zombie.characterTextures.BloodBodyPartType;
      static readonly UpperLeg_L: zombie.characterTextures.BloodBodyPartType;
      static readonly UpperLeg_R: zombie.characterTextures.BloodBodyPartType;
      name(): string;
      ordinal(): number;
      /**
       * @noSelf
       *
       * (int arg0): BloodBodyPartType
       */
      static FromIndex(arg0: number): zombie.characterTextures.BloodBodyPartType;

      /**
       * @noSelf
       *
       * (String arg0): BloodBodyPartType
       */
      static FromString(arg0: string | null): zombie.characterTextures.BloodBodyPartType;

      /**
       * @noSelf
       *
       * (BloodBodyPartType arg0): int
       */
      static ToIndex(arg0: zombie.characterTextures.BloodBodyPartType | null): number;

      getCharacterMaskParts(): zombie.core.skinnedmodel.model.CharacterMask$Part[];

      getDisplayName(): string;

      index(): number;

      /**
       * @noSelf
       *
       * (String arg0): BloodBodyPartType
       */
      static valueOf(arg0: string | null): zombie.characterTextures.BloodBodyPartType;

      /** @noSelf */
      static values(): zombie.characterTextures.BloodBodyPartType[];

    }
    /** [ENUM] zombie.characterTextures.BloodClothingType */
    export class BloodClothingType {
      protected constructor();
      static readonly Apron: zombie.characterTextures.BloodClothingType;
      static readonly Bag: zombie.characterTextures.BloodClothingType;
      static readonly FullHelmet: zombie.characterTextures.BloodClothingType;
      static readonly Groin: zombie.characterTextures.BloodClothingType;
      static readonly Hands: zombie.characterTextures.BloodClothingType;
      static readonly Head: zombie.characterTextures.BloodClothingType;
      static readonly Jacket: zombie.characterTextures.BloodClothingType;
      static readonly Jumper: zombie.characterTextures.BloodClothingType;
      static readonly JumperNoSleeves: zombie.characterTextures.BloodClothingType;
      static readonly LongJacket: zombie.characterTextures.BloodClothingType;
      static readonly LowerArms: zombie.characterTextures.BloodClothingType;
      static readonly LowerBody: zombie.characterTextures.BloodClothingType;
      static readonly LowerLegs: zombie.characterTextures.BloodClothingType;
      static readonly Neck: zombie.characterTextures.BloodClothingType;
      static readonly Shirt: zombie.characterTextures.BloodClothingType;
      static readonly ShirtLongSleeves: zombie.characterTextures.BloodClothingType;
      static readonly ShirtNoSleeves: zombie.characterTextures.BloodClothingType;
      static readonly Shoes: zombie.characterTextures.BloodClothingType;
      static readonly ShortsShort: zombie.characterTextures.BloodClothingType;
      static readonly Trousers: zombie.characterTextures.BloodClothingType;
      static readonly UpperArms: zombie.characterTextures.BloodClothingType;
      static readonly UpperBody: zombie.characterTextures.BloodClothingType;
      static readonly UpperLegs: zombie.characterTextures.BloodClothingType;
      name(): string;
      ordinal(): number;
      /**
       * @noSelf
       *
       * (BloodBodyPartType arg0, HumanVisual arg1, ArrayList arg2): void
       */
      static addBasicPatch(arg0: zombie.characterTextures.BloodBodyPartType | null, arg1: zombie.core.skinnedmodel.visual.HumanVisual | null, arg2: java.util.ArrayList<zombie.core.skinnedmodel.visual.ItemVisual> | null): void;

      /**
       * @noSelf
       *
       * (int arg0, HumanVisual arg1, ArrayList arg2, boolean arg3): void
       */
      static addBlood(arg0: number, arg1: zombie.core.skinnedmodel.visual.HumanVisual | null, arg2: java.util.ArrayList<zombie.core.skinnedmodel.visual.ItemVisual> | null, arg3: boolean): void;

      /**
       * @noSelf
       *
       * (BloodBodyPartType arg0, HumanVisual arg1, ArrayList arg2, boolean arg3): void
       */
      static addDirt(arg0: zombie.characterTextures.BloodBodyPartType | null, arg1: zombie.core.skinnedmodel.visual.HumanVisual | null, arg2: java.util.ArrayList<zombie.core.skinnedmodel.visual.ItemVisual> | null, arg3: boolean): void;

      /**
       * @noSelf
       *
       * (BloodBodyPartType arg0, HumanVisual arg1, ArrayList arg2, boolean arg3): boolean
       */
      static addHole(arg0: zombie.characterTextures.BloodBodyPartType | null, arg1: zombie.core.skinnedmodel.visual.HumanVisual | null, arg2: java.util.ArrayList<zombie.core.skinnedmodel.visual.ItemVisual> | null, arg3: boolean): boolean;

      /**
       * @noSelf
       *
       * (Clothing arg0): void
       */
      static calcTotalBloodLevel(arg0: zombie.inventory.types.Clothing | null): void;

      /**
       * @noSelf
       *
       * (Clothing arg0): void
       */
      static calcTotalDirtLevel(arg0: zombie.inventory.types.Clothing | null): void;

      /**
       * @noSelf
       *
       * (String arg0): BloodClothingType
       */
      static fromString(arg0: string | null): zombie.characterTextures.BloodClothingType;

      /**
       * @noSelf
       *
       * (ArrayList arg0): int
       */
      static getCoveredPartCount(arg0: java.util.ArrayList<zombie.characterTextures.BloodClothingType> | null): number;

      /**
       * @noSelf
       *
       * (ArrayList arg0): ArrayList
       */
      static getCoveredParts(arg0: java.util.ArrayList<zombie.characterTextures.BloodClothingType> | null): java.util.ArrayList<zombie.characterTextures.BloodBodyPartType>;

      /**
       * @noSelf
       *
       * (String arg0): BloodClothingType
       */
      static valueOf(arg0: string | null): zombie.characterTextures.BloodClothingType;

      /** @noSelf */
      static values(): zombie.characterTextures.BloodClothingType[];

    }
  }
}
