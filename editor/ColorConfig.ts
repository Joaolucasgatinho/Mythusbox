// Copyright (C) 2021 John Nesky, distributed under the MIT license.

import { BeepBoxOption, DictionaryArray, toNameMap, Config } from "../synth/SynthConfig";
import { Song } from "../synth/synth";
import { HTML } from "imperative-html/dist/esm/elements-strict";

export interface ChannelColors extends BeepBoxOption {
    readonly secondaryChannel: string;
    readonly primaryChannel: string;
    readonly secondaryNote: string;
    readonly primaryNote: string;
}

export class ColorConfig {
    public static colorLookup: Map<number, ChannelColors> = new Map<number, ChannelColors>();

    public static readonly themes: { [name: string]: string } = {
        "dark classic": `
			:root {
				--page-margin: black;
				--editor-background: black;
				--hover-preview: white;
				--playhead: white;
				--primary-text: white;
				--secondary-text: #999;
				--inverted-text: black;
				--text-selection: rgba(119,68,255,0.99);
				--box-selection-fill: rgba(255,255,255,0.2);
				--loop-accent: #74f;
				--link-accent: #98f;
				--ui-widget-background: #444;
				--ui-widget-focus: #777;
				--pitch-background: #444;
				--tonic: #864;
				--fifth-note: #468;
				--white-piano-key: #bbb;
				--black-piano-key: #444;
					--use-color-formula: false;
					--track-editor-bg-pitch: #444;
					--track-editor-bg-pitch-dim: #333;
					--track-editor-bg-noise: #444;
					--track-editor-bg-noise-dim: #333;
					--track-editor-bg-mod: #234;
					--track-editor-bg-mod-dim: #123;
					--multiplicative-mod-slider: #456;
					--overwriting-mod-slider: #654;
					--indicator-primary: #74f;
					--indicator-secondary: #444;
					--select2-opt-group: #585858;
					--input-box-outline: #333;
					--mute-button-normal: #ffa033;
					--mute-button-mod: #9a6bff;
				--pitch1-secondary-channel: #0099A1;
				--pitch1-primary-channel:   #25F3FF;
				--pitch1-secondary-note:    #00BDC7;
				--pitch1-primary-note:      #92F9FF;
				--pitch2-secondary-channel: #A1A100;
				--pitch2-primary-channel:   #FFFF25;
				--pitch2-secondary-note:    #C7C700;
				--pitch2-primary-note:      #FFFF92;
				--pitch3-secondary-channel: #C75000;
				--pitch3-primary-channel:   #FF9752;
				--pitch3-secondary-note:    #FF771C;
				--pitch3-primary-note:      #FFCDAB;
				--pitch4-secondary-channel: #00A100;
				--pitch4-primary-channel:   #50FF50;
				--pitch4-secondary-note:    #00C700;
				--pitch4-primary-note:      #A0FFA0;
				--pitch5-secondary-channel: #D020D0;
				--pitch5-primary-channel:   #FF90FF;
				--pitch5-secondary-note:    #E040E0;
				--pitch5-primary-note:      #FFC0FF;
				--pitch6-secondary-channel: #7777B0;
				--pitch6-primary-channel:   #A0A0FF;
				--pitch6-secondary-note:    #8888D0;
				--pitch6-primary-note:      #D0D0FF;
				--pitch7-secondary-channel: #8AA100;
				--pitch7-primary-channel:   #DEFF25;
				--pitch7-secondary-note:    #AAC700;
				--pitch7-primary-note:      #E6FF92;
				--pitch8-secondary-channel: #DF0019;
				--pitch8-primary-channel:   #FF98A4;
				--pitch8-secondary-note:    #FF4E63;
				--pitch8-primary-note:      #FFB2BB;
				--pitch9-secondary-channel: #00A170;
				--pitch9-primary-channel:   #50FFC9;
				--pitch9-secondary-note:    #00C78A;
				--pitch9-primary-note:      #83FFD9;
				--pitch10-secondary-channel:#A11FFF;
				--pitch10-primary-channel:  #CE8BFF;
				--pitch10-secondary-note:   #B757FF;
				--pitch10-primary-note:     #DFACFF;
				--noise1-secondary-channel: #6F6F6F;
				--noise1-primary-channel:   #AAAAAA;
				--noise1-secondary-note:    #A7A7A7;
				--noise1-primary-note:      #E0E0E0;
				--noise2-secondary-channel: #996633;
				--noise2-primary-channel:   #DDAA77;
				--noise2-secondary-note:    #CC9966;
				--noise2-primary-note:      #F0D0BB;
				--noise3-secondary-channel: #4A6D8F;
				--noise3-primary-channel:   #77AADD;
				--noise3-secondary-note:    #6F9FCF;
				--noise3-primary-note:      #BBD7FF;
				--noise4-secondary-channel: #7A4F9A;
				--noise4-primary-channel:   #AF82D2;
				--noise4-secondary-note:    #9E71C1;
				--noise4-primary-note:      #D4C1EA;
				--noise5-secondary-channel: #607837;
				--noise5-primary-channel:   #A2BB77;
				--noise5-secondary-note:    #91AA66;
				--noise5-primary-note:      #C5E2B2;
          --mod1-secondary-channel:   #339955;
					--mod1-primary-channel:     #77fc55;
					--mod1-secondary-note:      #77ff8a;
					--mod1-primary-note:        #cdffee;
					--mod2-secondary-channel:   #993355;
					--mod2-primary-channel:     #f04960;
					--mod2-secondary-note:      #f057a0;
					--mod2-primary-note:        #ffb8de;
					--mod3-secondary-channel:   #553399;
					--mod3-primary-channel:     #8855fc;
					--mod3-secondary-note:      #aa64ff;
					--mod3-primary-note:	    #f8ddff;
					--mod4-secondary-channel:   #a86436;
					--mod4-primary-channel:     #c8a825;
					--mod4-secondary-note:      #e8ba46;
					--mod4-primary-note:        #fff6d3;
					--mod-label-primary:        #999;
					--mod-label-secondary-text: #333;
					--mod-label-primary-text:   black;
					--disabled-note-primary:    #999;
					--disabled-note-secondary:  #666;
				}
			`,
        "dark competition": `
				:root {
					--page-margin: black;
					--editor-background: black;
					--hover-preview: #ddd;
					--playhead: #ddd;
					--primary-text: #ddd;
					--secondary-text: #8e695b;
					--inverted-text: black;
					--text-selection: rgba(169,0,255,0.99);
					--box-selection-fill: rgba(221,221,221,0.2);
					--loop-accent: #bf15ba;
					--link-accent: #f888ff;
					--ui-widget-background: #443a3a;
					--ui-widget-focus: #777;
					--pitch-background: #353333;
					--tonic: #884a44;
					--fifth-note: #415498;
					--white-piano-key: #bbb;
					--black-piano-key: #444;
					--use-color-formula: false;
					--track-editor-bg-pitch: #444;
					--track-editor-bg-pitch-dim: #333;
					--track-editor-bg-noise: #444;
					--track-editor-bg-noise-dim: #333;
					--track-editor-bg-mod: #234;
					--track-editor-bg-mod-dim: #123;
					--multiplicative-mod-slider: #456;
					--overwriting-mod-slider: #654;
					--indicator-primary: #74f;
					--indicator-secondary: #444;
					--select2-opt-group: #585858;
					--input-box-outline: #333;
					--mute-button-normal: #ffa033;
					--mute-button-mod: #9a6bff;
					--pitch1-secondary-channel: #0099a1;
					--pitch1-primary-channel:   #25f3ff;
					--pitch1-secondary-note:    #00bdc7;
					--pitch1-primary-note:      #92f9ff;
					--pitch2-secondary-channel: #a1a100;
					--pitch2-primary-channel:   #ffff25;
					--pitch2-secondary-note:    #c7c700;
					--pitch2-primary-note:      #ffff92;
					--pitch3-secondary-channel: #c75000;
					--pitch3-primary-channel:   #ff9752;
					--pitch3-secondary-note:    #ff771c;
					--pitch3-primary-note:      #ffcdab;
					--pitch4-secondary-channel: #00a100;
					--pitch4-primary-channel:   #50ff50;
					--pitch4-secondary-note:    #00c700;
					--pitch4-primary-note:      #a0ffa0;
					--pitch5-secondary-channel: #d020d0;
					--pitch5-primary-channel:   #ff90ff;
					--pitch5-secondary-note:    #e040e0;
					--pitch5-primary-note:      #ffc0ff;
					--pitch6-secondary-channel: #7777b0;
					--pitch6-primary-channel:   #a0a0ff;
					--pitch6-secondary-note:    #8888d0;
					--pitch6-primary-note:      #d0d0ff;
					--pitch7-secondary-channel: #8AA100;
					--pitch7-primary-channel:   #DEFF25;
					--pitch7-secondary-note:	  #AAC700;
					--pitch7-primary-note:			#E6FF92;
					--pitch8-secondary-channel: #DF0019;
					--pitch8-primary-channel:   #FF98A4;
					--pitch8-secondary-note:    #FF4E63;
					--pitch8-primary-note:      #FFB2BB;
					--pitch9-secondary-channel: #00A170;
					--pitch9-primary-channel:   #50FFC9;
					--pitch9-secondary-note:    #00C78A;
					--pitch9-primary-note:			#83FFD9;
					--pitch10-secondary-channel:#A11FFF;
					--pitch10-primary-channel:  #CE8BFF;
					--pitch10-secondary-note:   #B757FF;
					--pitch10-primary-note:     #DFACFF;
					--noise1-secondary-channel: #6f6f6f;
					--noise1-primary-channel:   #aaaaaa;
					--noise1-secondary-note:    #a7a7a7;
					--noise1-primary-note:      #e0e0e0;
					--noise2-secondary-channel: #996633;
					--noise2-primary-channel:   #ddaa77;
					--noise2-secondary-note:    #cc9966;
					--noise2-primary-note:      #f0d0bb;
					--noise3-secondary-channel: #4a6d8f;
					--noise3-primary-channel:   #77aadd;
					--noise3-secondary-note:    #6f9fcf;
					--noise3-primary-note:      #bbd7ff;
					--noise4-secondary-channel: #6B3E8E;
					--noise4-primary-channel:   #AF82D2;
					--noise4-secondary-note:    #9E71C1;
					--noise5-secondary-channel: #607837;
					--noise5-primary-channel:   #A2BB77;
					--noise5-secondary-note:    #91AA66;
					--noise5-primary-note:      #C5E2B2;
					--mod1-secondary-channel:   #339955;
					--mod1-primary-channel:     #77fc55;
					--mod1-secondary-note:      #77ff8a;
					--mod1-primary-note:        #cdffee;
					--mod2-secondary-channel:   #993355;
					--mod2-primary-channel:     #f04960;
					--mod2-secondary-note:      #f057a0;
					--mod2-primary-note:        #ffb8de;
					--mod3-secondary-channel:   #553399;
					--mod3-primary-channel:     #8855fc;
					--mod3-secondary-note:      #aa64ff;
					--mod3-primary-note:			  #f8ddff;
					--mod4-secondary-channel:   #a86436;
					--mod4-primary-channel:     #c8a825;
					--mod4-secondary-note:      #e8ba46;
					--mod4-primary-note:        #fff6d3;
					--mod-label-primary:        #999;
					--mod-label-secondary-text: #333;
					--mod-label-primary-text:   black;
					--disabled-note-primary:    #999;
					--disabled-note-secondary:  #666;

			}
		`,
        "light classic": `
			:root {
				-webkit-text-stroke-width: 0.5px;
				--page-margin: #685d88;
				--editor-background: white;
				--hover-preview: black;
				--playhead: rgba(0,0,0,0.5);
				--primary-text: black;
				--secondary-text: #777;
				--inverted-text: white;
				--text-selection: rgba(200,170,255,0.99);
				--box-selection-fill: rgba(0,0,0,0.1);
				--loop-accent: #98f;
				--link-accent: #74f;
				--ui-widget-background: #ececec;
				--ui-widget-focus: #eee;
				--pitch-background: #ececec;
				--tonic: #f0d6b6;
				--fifth-note: #bbddf0;
				--white-piano-key: #eee;
				--black-piano-key: #666;
					--use-color-formula: false;
					--track-editor-bg-pitch: #ececec;
					--track-editor-bg-pitch-dim: #fdfdfd;
					--track-editor-bg-noise: #ececec;
					--track-editor-bg-noise-dim: #fdfdfd;
					--track-editor-bg-mod: #dbecfd;
					--track-editor-bg-mod-dim: #ecfdff;
					--multiplicative-mod-slider: #789;
					--overwriting-mod-slider: #987;
					--indicator-primary: #98f;
					--indicator-secondary: #cde;
					--select2-opt-group: #cecece;
					--input-box-outline: #ddd;
					--mute-button-normal: #c0b47f;
					--mute-button-mod: #bd7fc0;
				--pitch1-secondary-channel: #6CD9ED;
				--pitch1-primary-channel:   #00A0BD;
				--pitch1-secondary-note:    #34C2DC;
				--pitch1-primary-note:      #00758A;
				--pitch2-secondary-channel: #E3C941;
				--pitch2-primary-channel:   #B49700;
				--pitch2-secondary-note:    #D1B628;
				--pitch2-primary-note:      #836E00;
				--pitch3-secondary-channel: #FF9D61;
				--pitch3-primary-channel:   #E14E00;
				--pitch3-secondary-note:    #F67D3C;
				--pitch3-primary-note:      #B64000;
				--pitch4-secondary-channel: #4BE24B;
				--pitch4-primary-channel:   #00A800;
				--pitch4-secondary-note:    #2DC82D;
				--pitch4-primary-note:      #008000;
				--pitch5-secondary-channel: #FF90FF;
				--pitch5-primary-channel:   #E12EDF;
				--pitch5-secondary-note:    #EC6EEC;
				--pitch5-primary-note:      #A600A5;
				--pitch6-secondary-channel: #B5B5FE;
				--pitch6-primary-channel:   #6969FD;
				--pitch6-secondary-note:    #9393FE;
				--pitch6-primary-note:      #4A4AD7;
				--pitch7-secondary-channel: #C2D848;
				--pitch7-primary-channel:   #8EA800;
				--pitch7-secondary-note:    #B0C82D;
				--pitch7-primary-note:      #6C8000;
				--pitch8-secondary-channel: #FF90A4;
				--pitch8-primary-channel:   #E12E4D;
				--pitch8-secondary-note:    #EC6E85;
				--pitch8-primary-note:      #A6001D;
				--pitch9-secondary-channel: #41E3B5;
				--pitch9-primary-channel:   #00B481;
				--pitch9-secondary-note:    #28D1A1;
				--pitch9-primary-note:      #00835E;
				--pitch10-secondary-channel:#CA77FF;
				--pitch10-primary-channel:  #9609FF;
				--pitch10-secondary-note:   #B54FFF;
				--pitch10-primary-note:     #8400E3;
				--noise1-secondary-channel: #C1C1C1;
				--noise1-primary-channel:   #898989;
				--noise1-secondary-note:    #ADADAD;
				--noise1-primary-note:      #6C6C6C;
				--noise2-secondary-channel: #E8BB8C;
				--noise2-primary-channel:   #BD7D3A;
				--noise2-secondary-note:    #D1A374;
				--noise2-primary-note:      #836342;
				--noise3-secondary-channel: #9BC4EB;
				--noise3-primary-channel:   #4481BE;
				--noise3-secondary-note:    #7CA7D3;
				--noise3-primary-note:      #476685;
				--noise4-secondary-channel: #C5A5E0;
				--noise4-primary-channel:   #8553AE;
				--noise4-secondary-note:    #B290CC;
				--noise4-primary-note:      #684F7D;
				--noise5-secondary-channel: #B8CE93;
				--noise5-primary-channel:   #87A74F;
				--noise5-secondary-note:    #ABC183;
				--noise5-primary-note:      #68784C;
					--mod1-secondary-channel:   #339955;
					--mod1-primary-channel:     #77dd55;
					--mod1-secondary-note:      #77ff8a;
					--mod1-primary-note:        #2ad84a;
					--mod2-secondary-channel:   #993355;
					--mod2-primary-channel:     #f04960;
					--mod2-secondary-note:      #f057a0;
					--mod2-primary-note:        #ba124a;
					--mod3-secondary-channel:   #553399;
					--mod3-primary-channel:     #8855fc;
					--mod3-secondary-note:      #aa64ff;
					--mod3-primary-note:        #7a1caa;
					--mod4-secondary-channel:   #a86436;
					--mod4-primary-channel:     #c8a825;
					--mod4-secondary-note:      #e8ba46;
					--mod4-primary-note:        #a86810;
					--mod-label-primary:        #dddddd;
					--mod-label-secondary-text: #777;
					--mod-label-primary-text:   black;
					--disabled-note-primary:    #666;
					--disabled-note-secondary:  #aaa;
			}
			
			.beepboxEditor button, .beepboxEditor select {
				box-shadow: inset 0 0 0 1px var(--secondary-text);
			}

				.select2-selection__rendered {
					box-shadow: inset 0 0 0 1px var(--secondary-text);
				}
		`,
        "jummbox classic": `
				:root {
					--page-margin: #040410;
					--editor-background: #040410;
					--hover-preview: white;
					--playhead: rgba(255, 255, 255, 0.9);
					--primary-text: white;
					--secondary-text: #84859a;
					--inverted-text: black;
					--text-selection: rgba(119,68,255,0.99);
					--box-selection-fill: #044b94;
					--loop-accent: #74f;
					--link-accent: #98f;
					--ui-widget-background: #393e4f;
					--ui-widget-focus: #6d6886;
					--pitch-background: #393e4f;
					--tonic: #725491;
					--fifth-note: #54547a;
					--white-piano-key: #eee;
					--black-piano-key: #666;
					--use-color-formula: true;
					--track-editor-bg-pitch: #393e4f;
					--track-editor-bg-pitch-dim: #1c1d28;
					--track-editor-bg-noise: #3d3535;
					--track-editor-bg-noise-dim: #161313;
					--track-editor-bg-mod: #283560;
					--track-editor-bg-mod-dim: #0a101f;
					--multiplicative-mod-slider: #606c9f;
					--overwriting-mod-slider: #6850b5;
					--indicator-primary: #9c64f7;
					--indicator-secondary: #393e4f;
					--select2-opt-group: #5d576f;
					--input-box-outline: #222;
					--mute-button-normal: #dda85d;
					--mute-button-mod: #886eae;
					--mod-label-primary: #282840;
					--mod-label-secondary-text: rgb(87, 86, 120);
					--mod-label-primary-text: white;
					--pitch-secondary-channel-hue: 0;
					--pitch-secondary-channel-hue-scale: 6.1;
					--pitch-secondary-channel-sat: 83.3;
					--pitch-secondary-channel-sat-scale: 0.1;
					--pitch-secondary-channel-lum: 40;
					--pitch-secondary-channel-lum-scale: 0.05;
					--pitch-primary-channel-hue: 0;
					--pitch-primary-channel-hue-scale: 6.1;
					--pitch-primary-channel-sat: 100;
					--pitch-primary-channel-sat-scale: 0.1;
					--pitch-primary-channel-lum: 67.5;
					--pitch-primary-channel-lum-scale: 0.05;
					--pitch-secondary-note-hue: 0;
					--pitch-secondary-note-hue-scale: 6.1;
					--pitch-secondary-note-sat: 93.9;
					--pitch-secondary-note-sat-scale: 0.1;
					--pitch-secondary-note-lum: 25;
					--pitch-secondary-note-lum-scale: 0.05;
					--pitch-primary-note-hue: 0;
					--pitch-primary-note-hue-scale: 6.1;
					--pitch-primary-note-sat: 100;
					--pitch-primary-note-sat-scale: 0.05;
					--pitch-primary-note-lum: 85.6;
					--pitch-primary-note-lum-scale: 0.025;
					--noise-secondary-channel-hue: 0;
					--noise-secondary-channel-hue-scale: 2;
					--noise-secondary-channel-sat: 25;
					--noise-secondary-channel-sat-scale: 0;
					--noise-secondary-channel-lum: 42;
					--noise-secondary-channel-lum-scale: 0;
					--noise-primary-channel-hue: 0;
					--noise-primary-channel-hue-scale: 2;
					--noise-primary-channel-sat: 33;
					--noise-primary-channel-sat-scale: 0;
					--noise-primary-channel-lum: 63.5;
					--noise-primary-channel-lum-scale: 0;
					--noise-secondary-note-hue: 0;
					--noise-secondary-note-hue-scale: 2;
					--noise-secondary-note-sat: 33.5;
					--noise-secondary-note-sat-scale: 0;
					--noise-secondary-note-lum: 55;
					--noise-secondary-note-lum-scale: 0;
					--noise-primary-note-hue: 0;
					--noise-primary-note-hue-scale: 2;
					--noise-primary-note-sat: 46.5;
					--noise-primary-note-sat-scale: 0;
					--noise-primary-note-lum: 74;
					--noise-primary-note-lum-scale: 0;
					--mod-secondary-channel-hue: 192;
					--mod-secondary-channel-hue-scale: 1.5;
					--mod-secondary-channel-sat: 88;
					--mod-secondary-channel-sat-scale: 0;
					--mod-secondary-channel-lum: 50;
					--mod-secondary-channel-lum-scale: 0;
					--mod-primary-channel-hue: 192;
					--mod-primary-channel-hue-scale: 1.5;
					--mod-primary-channel-sat: 96;
					--mod-primary-channel-sat-scale: 0;
					--mod-primary-channel-lum: 80;
					--mod-primary-channel-lum-scale: 0;
					--mod-secondary-note-hue: 192;
					--mod-secondary-note-hue-scale: 1.5;
					--mod-secondary-note-sat: 92;
					--mod-secondary-note-sat-scale: 0;
					--mod-secondary-note-lum: 45;
					--mod-secondary-note-lum-scale: 0;
					--mod-primary-note-hue: 192;
					--mod-primary-note-hue-scale: 1.5;
					--mod-primary-note-sat: 96;
					--mod-primary-note-sat-scale: 0;
					--mod-primary-note-lum: 85;
					--mod-primary-note-lum-scale: 0;
					--disabled-note-primary:    #91879f;
					--disabled-note-secondary:  #6a677a;
				}
			`,
        "forest": `
				:root {
					--page-margin: #010c03;
					--editor-background: #010c03;
					--hover-preview: #efe;
					--playhead: rgba(232, 255, 232, 0.9);
					--primary-text: #efe;
					--secondary-text: #70A070;
					--inverted-text: #280228;
					--text-selection: rgba(255,68,199,0.99);
					--box-selection-fill: #267aa3;
					--loop-accent: #ffe845;
					--link-accent: #9f8;
					--ui-widget-background: #203829;
					--ui-widget-focus: #487860;
					--pitch-background: #203829;
					--tonic: #2b8d20;
					--fifth-note: #385840;
					--white-piano-key: #bda;
					--black-piano-key: #573;
					--use-color-formula: true;
					--track-editor-bg-pitch: #254820;
					--track-editor-bg-pitch-dim: #102819;
					--track-editor-bg-noise: #304050;
					--track-editor-bg-noise-dim: #102030;
					--track-editor-bg-mod: #506030;
					--track-editor-bg-mod-dim: #2a300a;
					--multiplicative-mod-slider: #205c8f;
					--overwriting-mod-slider: #20ac6f;
					--indicator-primary: #dcd866;
					--indicator-secondary: #203829;
					--select2-opt-group: #1a6f5a;
					--input-box-outline: #242;
					--mute-button-normal: #49e980;
					--mute-button-mod: #c2e502;
					--mod-label-primary: #133613;
					--mod-label-secondary-text: rgb(27, 126, 40);
					--mod-label-primary-text: #efe;
					--pitch-secondary-channel-hue: 120;
					--pitch-secondary-channel-hue-scale: 8.1;
					--pitch-secondary-channel-sat: 59;
					--pitch-secondary-channel-sat-scale: 0.1;
					--pitch-secondary-channel-lum: 50;
					--pitch-secondary-channel-lum-scale: 0.04;
					--pitch-primary-channel-hue: 120;
					--pitch-primary-channel-hue-scale: 8.1;
					--pitch-primary-channel-sat: 86;
					--pitch-primary-channel-sat-scale: 0.1;
					--pitch-primary-channel-lum: 70;
					--pitch-primary-channel-lum-scale: 0.04;
					--pitch-secondary-note-hue: 120;
					--pitch-secondary-note-hue-scale: 8.1;
					--pitch-secondary-note-sat: 85;
					--pitch-secondary-note-sat-scale: 0.1;
					--pitch-secondary-note-lum: 30;
					--pitch-secondary-note-lum-scale: 0.04;
					--pitch-primary-note-hue: 120;
					--pitch-primary-note-hue-scale: 8.1;
					--pitch-primary-note-sat: 90;
					--pitch-primary-note-sat-scale: 0.05;
					--pitch-primary-note-lum: 80;
					--pitch-primary-note-lum-scale: 0.025;
					--noise-secondary-channel-hue: 200;
					--noise-secondary-channel-hue-scale: 1.1;
					--noise-secondary-channel-sat: 25;
					--noise-secondary-channel-sat-scale: 0;
					--noise-secondary-channel-lum: 22;
					--noise-secondary-channel-lum-scale: 0;
					--noise-primary-channel-hue: 200;
					--noise-primary-channel-hue-scale: 1.1;
					--noise-primary-channel-sat: 48;
					--noise-primary-channel-sat-scale: 0;
					--noise-primary-channel-lum: 65;
					--noise-primary-channel-lum-scale: 0;
					--noise-secondary-note-hue: 200;
					--noise-secondary-note-hue-scale: 1.1;
					--noise-secondary-note-sat: 33.5;
					--noise-secondary-note-sat-scale: 0;
					--noise-secondary-note-lum: 33;
					--noise-secondary-note-lum-scale: 0;
					--noise-primary-note-hue: 200;
					--noise-primary-note-hue-scale: 1.1;
					--noise-primary-note-sat: 46.5;
					--noise-primary-note-sat-scale: 0;
					--noise-primary-note-lum: 64;
					--noise-primary-note-lum-scale: 0;
					--mod-secondary-channel-hue: 40;
					--mod-secondary-channel-hue-scale: 1.8;
					--mod-secondary-channel-sat: 44;
					--mod-secondary-channel-sat-scale: 0;
					--mod-secondary-channel-lum: 50;
					--mod-secondary-channel-lum-scale: 0;
					--mod-primary-channel-hue: 40;
					--mod-primary-channel-hue-scale: 1.8;
					--mod-primary-channel-sat: 60;
					--mod-primary-channel-sat-scale: 0;
					--mod-primary-channel-lum: 80;
					--mod-primary-channel-lum-scale: 0;
					--mod-secondary-note-hue: 40;
					--mod-secondary-note-hue-scale: 1.8;
					--mod-secondary-note-sat: 62;
					--mod-secondary-note-sat-scale: 0;
					--mod-secondary-note-lum: 55;
					--mod-secondary-note-lum-scale: 0;
					--mod-primary-note-hue: 40;
					--mod-primary-note-hue-scale: 1.8;
					--mod-primary-note-sat: 66;
					--mod-primary-note-sat-scale: 0;
					--mod-primary-note-lum: 85;
					--mod-primary-note-lum-scale: 0;
					--disabled-note-primary:    #536e5c;
					--disabled-note-secondary:  #395440;
				}
			`,
        "canyon": `
				:root {
					--page-margin: #0a0000;
					--editor-background: #0a0000;
					--hover-preview: white;
					--playhead: rgba(247, 172, 196, 0.9);
					--primary-text: #f5d6bf;
					--secondary-text: #934050;
					--inverted-text: #290505;
					--text-selection: rgba(255, 208, 68, 0.99);
					--box-selection-fill: #94044870;
					--loop-accent: #ff1e1e;
					--link-accent: #da7b76;
					--ui-widget-background: #533137;
					--ui-widget-focus: #743e4b;
					--pitch-background: #4f3939;
					--tonic: #9e4145;
					--fifth-note: #5b3e6b;
					--white-piano-key: #d89898;
					--black-piano-key: #572b29;
					--use-color-formula: true;
					--track-editor-bg-pitch: #5e3a41;
					--track-editor-bg-pitch-dim: #281d1c;
					--track-editor-bg-noise: #3a3551;
					--track-editor-bg-noise-dim: #272732;
					--track-editor-bg-mod: #552045;
					--track-editor-bg-mod-dim: #3e1442;
					--multiplicative-mod-slider: #9f6095;
					--overwriting-mod-slider: #b55050;
					--indicator-primary: #f2f764;
					--indicator-secondary: #4f3939;
					--select2-opt-group: #673030;
					--input-box-outline: #443131;
					--mute-button-normal: #d81833;
					--mute-button-mod: #9e2691;
					--mod-label-primary: #5f2b39;
					--mod-label-secondary-text: rgb(158, 66, 122);
					--mod-label-primary-text: #e6caed;
					--pitch-secondary-channel-hue: 0;
					--pitch-secondary-channel-hue-scale: 11.8;
					--pitch-secondary-channel-sat: 73.3;
					--pitch-secondary-channel-sat-scale: 0.1;
					--pitch-secondary-channel-lum: 40;
					--pitch-secondary-channel-lum-scale: 0.05;
					--pitch-primary-channel-hue: 0;
					--pitch-primary-channel-hue-scale: 11.8;
					--pitch-primary-channel-sat: 90;
					--pitch-primary-channel-sat-scale: 0.1;
					--pitch-primary-channel-lum: 67.5;
					--pitch-primary-channel-lum-scale: 0.05;
					--pitch-secondary-note-hue: 0;
					--pitch-secondary-note-hue-scale: 11.8;
					--pitch-secondary-note-sat: 83.9;
					--pitch-secondary-note-sat-scale: 0.1;
					--pitch-secondary-note-lum: 35;
					--pitch-secondary-note-lum-scale: 0.05;
					--pitch-primary-note-hue: 0;
					--pitch-primary-note-hue-scale: 11.8;
					--pitch-primary-note-sat: 100;
					--pitch-primary-note-sat-scale: 0.05;
					--pitch-primary-note-lum: 85.6;
					--pitch-primary-note-lum-scale: 0.025;
					--noise-secondary-channel-hue: 60;
					--noise-secondary-channel-hue-scale: 2;
					--noise-secondary-channel-sat: 25;
					--noise-secondary-channel-sat-scale: 0;
					--noise-secondary-channel-lum: 42;
					--noise-secondary-channel-lum-scale: 0;
					--noise-primary-channel-hue: 60;
					--noise-primary-channel-hue-scale: 2;
					--noise-primary-channel-sat: 33;
					--noise-primary-channel-sat-scale: 0;
					--noise-primary-channel-lum: 63.5;
					--noise-primary-channel-lum-scale: 0;
					--noise-secondary-note-hue: 60;
					--noise-secondary-note-hue-scale: 2;
					--noise-secondary-note-sat: 33.5;
					--noise-secondary-note-sat-scale: 0;
					--noise-secondary-note-lum: 55;
					--noise-secondary-note-lum-scale: 0;
					--noise-primary-note-hue: 60;
					--noise-primary-note-hue-scale: 2;
					--noise-primary-note-sat: 46.5;
					--noise-primary-note-sat-scale: 0;
					--noise-primary-note-lum: 74;
					--noise-primary-note-lum-scale: 0;
					--mod-secondary-channel-hue: 222;
					--mod-secondary-channel-hue-scale: 1.5;
					--mod-secondary-channel-sat: 88;
					--mod-secondary-channel-sat-scale: 0;
					--mod-secondary-channel-lum: 50;
					--mod-secondary-channel-lum-scale: 0;
					--mod-primary-channel-hue: 222;
					--mod-primary-channel-hue-scale: 1.5;
					--mod-primary-channel-sat: 96;
					--mod-primary-channel-sat-scale: 0;
					--mod-primary-channel-lum: 80;
					--mod-primary-channel-lum-scale: 0;
					--mod-secondary-note-hue: 222;
					--mod-secondary-note-hue-scale: 1.5;
					--mod-secondary-note-sat: 92;
					--mod-secondary-note-sat-scale: 0;
					--mod-secondary-note-lum: 54;
					--mod-secondary-note-lum-scale: 0;
					--mod-primary-note-hue: 222;
					--mod-primary-note-hue-scale: 1.5;
					--mod-primary-note-sat: 96;
					--mod-primary-note-sat-scale: 0;
					--mod-primary-note-lum: 75;
					--mod-primary-note-lum-scale: 0;
					--disabled-note-primary:    #515164;
					--disabled-note-secondary:  #2a2a3a;
				}
			`,
        "midnight": `
		:root {
			--page-margin: #000;
			--editor-background: #000;
			--hover-preview: #757575;
			--playhead: #fff;
			--primary-text: #fff;
			--secondary-text: #acacac;
			--inverted-text: #290505;
			--text-selection: rgba(155, 155, 155, 0.99);
			--box-selection-fill: #79797970;
			--loop-accent: #646464;
			--link-accent: #707070;
			--ui-widget-background: #353535;
			--ui-widget-focus: #464646;
			--pitch-background: #222121;
			--tonic: #1a1818;
			--fifth-note: #555955;
			--white-piano-key: #a89e9e;
			--black-piano-key: #2d2424;
			--use-color-formula: true;
			--track-editor-bg-pitch: #373737;
			--track-editor-bg-pitch-dim: #131313;
			--track-editor-bg-noise: #484848;
			--track-editor-bg-noise-dim: #131313;
			--track-editor-bg-mod: #373737;
			--track-editor-bg-mod-dim: #131313;
			--multiplicative-mod-slider: #555;
			--overwriting-mod-slider: #464545;
			--indicator-primary: #e0e0e0;
			--indicator-secondary: #404040;
			--select2-opt-group: #3c3b3b;
			--input-box-outline: #757575;
			--mute-button-normal: #8e8d8d;
			--mute-button-mod: #ddd;
			--mod-label-primary: #262526;
			--mod-label-secondary-text: rgb(227, 222, 225);
			--mod-label-primary-text: #b9b9b9;
			--pitch-secondary-channel-hue: 240;
			--pitch-secondary-channel-hue-scale: 228;
			--pitch-secondary-channel-sat: 73.3;
			--pitch-secondary-channel-sat-scale: 0.1;
			--pitch-secondary-channel-lum: 25;
			--pitch-secondary-channel-lum-scale: 0.05;
			--pitch-primary-channel-hue: 240;
			--pitch-primary-channel-hue-scale: 228;
			--pitch-primary-channel-sat: 80;
			--pitch-primary-channel-sat-scale: 0.1;
			--pitch-primary-channel-lum: 60.5;
			--pitch-primary-channel-lum-scale: 0.05;
			--pitch-secondary-note-hue: 240;
			--pitch-secondary-note-hue-scale: 228;
			--pitch-secondary-note-sat: 73.9;
			--pitch-secondary-note-sat-scale: 0.1;
			--pitch-secondary-note-lum: 32;
			--pitch-secondary-note-lum-scale: 0.05;
			--pitch-primary-note-hue: 240;
			--pitch-primary-note-hue-scale: 228;
			--pitch-primary-note-sat: 90;
			--pitch-primary-note-sat-scale: 0.05;
			--pitch-primary-note-lum: 80.6;
			--pitch-primary-note-lum-scale: 0.025;
			--noise-secondary-channel-hue: 160;
			--noise-secondary-channel-hue-scale: 2;
			--noise-secondary-channel-sat: 25;
			--noise-secondary-channel-sat-scale: 0;
			--noise-secondary-channel-lum: 42;
			--noise-secondary-channel-lum-scale: 0;
			--noise-primary-channel-hue: 160;
			--noise-primary-channel-hue-scale: 2;
			--noise-primary-channel-sat: 33;
			--noise-primary-channel-sat-scale: 0;
			--noise-primary-channel-lum: 63.5;
			--noise-primary-channel-lum-scale: 0;
			--noise-secondary-note-hue: 160;
			--noise-secondary-note-hue-scale: 2;
			--noise-secondary-note-sat: 33.5;
			--noise-secondary-note-sat-scale: 0;
			--noise-secondary-note-lum: 55;
			--noise-secondary-note-lum-scale: 0;
			--noise-primary-note-hue: 160;
			--noise-primary-note-hue-scale: 2;
			--noise-primary-note-sat: 46.5;
			--noise-primary-note-sat-scale: 0;
			--noise-primary-note-lum: 74;
			--noise-primary-note-lum-scale: 0;
			--mod-secondary-channel-hue: 62;
			--mod-secondary-channel-hue-scale: 1.5;
			--mod-secondary-channel-sat: 88;
			--mod-secondary-channel-sat-scale: 0;
			--mod-secondary-channel-lum: 30;
			--mod-secondary-channel-lum-scale: 0;
			--mod-primary-channel-hue: 62;
			--mod-primary-channel-hue-scale: 1.5;
			--mod-primary-channel-sat: 96;
			--mod-primary-channel-sat-scale: 0;
			--mod-primary-channel-lum: 80;
			--mod-primary-channel-lum-scale: 0;
			--mod-secondary-note-hue: 62;
			--mod-secondary-note-hue-scale: 1.5;
			--mod-secondary-note-sat: 92;
			--mod-secondary-note-sat-scale: 0;
			--mod-secondary-note-lum: 34;
			--mod-secondary-note-lum-scale: 0;
			--mod-primary-note-hue: 62;
			--mod-primary-note-hue-scale: 1.5;
			--mod-primary-note-sat: 96;
			--mod-primary-note-sat-scale: 0;
			--mod-primary-note-lum: 75;
			--mod-primary-note-lum-scale: 0;
			--disabled-note-primary:    #66a;
			--disabled-note-secondary:  #447;
		}
	`,
        "jummbox light": `
				:root {
					-webkit-text-stroke-width: 0.5px;
					--page-margin: #fefdff;
					--editor-background: #fefdff;
					--hover-preview: #302880;
					--playhead: rgba(62, 32, 120, 0.9);
					--primary-text: #401890;
					--secondary-text: #8769af;
					--inverted-text: #fefdff;
					--text-selection: rgba(255,160,235,0.99);
					--box-selection-fill: rgba(30,62,220,0.5);
					--loop-accent: #4c35d4;
					--link-accent: #7af;
					--ui-widget-background: #bf9cec;
					--ui-widget-focus: #e9c4ff;
					--pitch-background: #e2d9f9;
					--tonic: #c288cc;
					--fifth-note: #d8c9fd;
					--white-piano-key: #e2e2ff;
					--black-piano-key: #66667a;
					--use-color-formula: true;
					--track-editor-bg-pitch: #d9e5ec;
					--track-editor-bg-pitch-dim: #eaeef5;
					--track-editor-bg-noise: #ffc3ae;
					--track-editor-bg-noise-dim: #ffe0cf;
					--track-editor-bg-mod: #c9accc;
					--track-editor-bg-mod-dim: #ebe3ef;
					--multiplicative-mod-slider: #807caf;
					--overwriting-mod-slider: #909cdf;
					--indicator-primary: #ae38ff;
					--indicator-secondary: #bbd4ec;
					--select2-opt-group: #c1b7f1;
					--input-box-outline: #bbb;
					--mute-button-normal: #e9b752;
					--mute-button-mod: #9558ee;
					--mod-label-primary: #ececff;
					--mod-label-secondary-text: rgb(197, 145, 247);
					--mod-label-primary-text: #302880;
					--pitch-secondary-channel-hue: 0;
					--pitch-secondary-channel-hue-scale: 8.1;
					--pitch-secondary-channel-sat: 53.3;
					--pitch-secondary-channel-sat-scale: -0.1;
					--pitch-secondary-channel-lum: 72;
					--pitch-secondary-channel-lum-scale: -0.05;
					--pitch-primary-channel-hue: 0;
					--pitch-primary-channel-hue-scale: 8.1;
					--pitch-primary-channel-sat: 97;
					--pitch-primary-channel-sat-scale: -0.1;
					--pitch-primary-channel-lum: 45.5;
					--pitch-primary-channel-lum-scale: -0.05;
					--pitch-secondary-note-hue: 0;
					--pitch-secondary-note-hue-scale: 8.1;
					--pitch-secondary-note-sat: 93.9;
					--pitch-secondary-note-sat-scale: -0.1;
					--pitch-secondary-note-lum: 95;
					--pitch-secondary-note-lum-scale: -0.05;
					--pitch-primary-note-hue: 0;
					--pitch-primary-note-hue-scale: 8.1;
					--pitch-primary-note-sat: 100;
					--pitch-primary-note-sat-scale: 0.05;
					--pitch-primary-note-lum: 43.6;
					--pitch-primary-note-lum-scale: -0.025;
					--noise-secondary-channel-hue: 220;
					--noise-secondary-channel-hue-scale: 2;
					--noise-secondary-channel-sat: 25;
					--noise-secondary-channel-sat-scale: 0;
					--noise-secondary-channel-lum: 62;
					--noise-secondary-channel-lum-scale: -0.1;
					--noise-primary-channel-hue: 220;
					--noise-primary-channel-hue-scale: 2;
					--noise-primary-channel-sat: 53;
					--noise-primary-channel-sat-scale: 0;
					--noise-primary-channel-lum: 53.5;
					--noise-primary-channel-lum-scale: -0.1;
					--noise-secondary-note-hue: 220;
					--noise-secondary-note-hue-scale: 2;
					--noise-secondary-note-sat: 58.5;
					--noise-secondary-note-sat-scale: 0;
					--noise-secondary-note-lum: 85;
					--noise-secondary-note-lum-scale: -1;
					--noise-primary-note-hue: 220;
					--noise-primary-note-hue-scale: 2;
					--noise-primary-note-sat: 56.5;
					--noise-primary-note-sat-scale: 0;
					--noise-primary-note-lum: 54;
					--noise-primary-note-lum-scale: -1;
					--mod-secondary-channel-hue: 90;
					--mod-secondary-channel-hue-scale: 1.5;
					--mod-secondary-channel-sat: 88;
					--mod-secondary-channel-sat-scale: 0;
					--mod-secondary-channel-lum: 60;
					--mod-secondary-channel-lum-scale: 0;
					--mod-primary-channel-hue: 90;
					--mod-primary-channel-hue-scale: 1.5;
					--mod-primary-channel-sat: 100;
					--mod-primary-channel-sat-scale: 0;
					--mod-primary-channel-lum: 65;
					--mod-primary-channel-lum-scale: 0;
					--mod-secondary-note-hue: 90;
					--mod-secondary-note-hue-scale: 1.5;
					--mod-secondary-note-sat: 92;
					--mod-secondary-note-sat-scale: 0;
					--mod-secondary-note-lum: 95;
					--mod-secondary-note-lum-scale: 0;
					--mod-primary-note-hue: 90;
					--mod-primary-note-hue-scale: 1.5;
					--mod-primary-note-sat: 96;
					--mod-primary-note-sat-scale: 0;
					--mod-primary-note-lum: 55;
					--mod-primary-note-lum-scale: 0;
					--disabled-note-primary:    #868;
					--disabled-note-secondary:  #767;
				}

				.beepboxEditor button, .beepboxEditor select {
					box-shadow: inset 0 0 0 1px var(--secondary-text);
				}

				.select2-selection__rendered {
					box-shadow: inset 0 0 0 1px var(--secondary-text);
				}
			`,

		"beachcombing": `
				:root {
				--page-margin: #010121;
				--editor-background: #020222;
				--hover-preview: #f3ffff;
				--playhead: #fff;
				--primary-text: #c1f1ff;
				--secondary-text: #546775;
				--inverted-text: black;
				--text-selection: rgba(119,68,255,0.99);
				--box-selection-fill: #3e0028;
				--loop-accent: #5a00ff;
				--link-accent: #ff00c8fc;
				--ui-widget-background: #1f2b52;
				--ui-widget-focus: #384e91;
				--pitch-background: #2c3155;
				--tonic: #a32f6e;
				--fifth-note: #0044a0;
				--white-piano-key: #fff;
				--black-piano-key: #202d42;
				--use-color-formula: false;
				--track-editor-bg-pitch: #34406c;
				--track-editor-bg-pitch-dim: #1c1d28;
				--track-editor-bg-noise: #562e3b;
				--track-editor-bg-noise-dim: #161313;
				--track-editor-bg-mod: #372e66;
				--track-editor-bg-mod-dim: #2a1640;
				--multiplicative-mod-slider: #606c9f;
				--overwriting-mod-slider: #6850b5;
				--indicator-primary: #ff67c2;
				--indicator-secondary: #393e4f;
				--select2-opt-group: #5d576f;
				--input-box-outline: #222;
				--mute-button-normal: #7ce1ff;
				--mute-button-mod: #db519d;
				--pitch1-secondary-channel: #329b70;
				--pitch1-primary-channel: #53ffb8;
				--pitch1-secondary-note: #4cb98c;
				--pitch1-primary-note: #98ffd4;
				--pitch2-secondary-channel: #8e8632;
				--pitch2-primary-channel: #fff36a;
				--pitch2-secondary-note: #afaf22;
				--pitch2-primary-note: #f9f93f;
				--pitch3-secondary-channel: #018e8e;
				--pitch3-primary-channel: #00ffff;
				--pitch3-secondary-note: #24b7b7;
				--pitch3-primary-note: #a7ffff;
				--pitch4-secondary-channel: #6c003d;
				--pitch4-primary-channel: #ff0090;
				--pitch4-secondary-note: #a73c78;
				--pitch4-primary-note: #ff98d2;
				--pitch5-secondary-channel: #0e8153;
				--pitch5-primary-channel: #59ffbd;
				--pitch5-secondary-note: #489979;
				--pitch5-primary-note: #b0ffe0;
				--pitch6-secondary-channel: #185aab;
				--pitch6-primary-channel: #4e7ce5;
				--pitch6-secondary-note: #3e99d9;
				--pitch6-primary-note: #b3e3ff;
				--pitch7-secondary-channel: #4f007d;
				--pitch7-primary-channel: #a200ff;
				--pitch7-secondary-note: #9741c9;
				--pitch7-primary-note: #d386ff;
				--pitch8-secondary-channel: #101c8d;
				--pitch8-primary-channel: #1c5df1;
				--pitch8-secondary-note: #FF4E63;
				--pitch8-primary-note: #FFB2BB;
				--pitch9-secondary-channel: #00A170;
				--pitch9-primary-channel: #50FFC9;
				--pitch9-secondary-note: #00C78A;
				--pitch9-primary-note: #83FFD9;
				--pitch10-secondary-channel: #A11FFF;
				--pitch10-primary-channel: #CE8BFF;
				--pitch10-secondary-note: #B757FF;
				--pitch10-primary-note: #DFACFF;
				--noise1-secondary-channel: #635070;
				--noise1-primary-channel: #9071db;
				--noise1-secondary-note: #915dc1;
				--noise1-primary-note: #c5a5ff;
				--noise2-secondary-channel: #993367;
				--noise2-primary-channel: #dd777c;
				--noise2-secondary-note: #cc6695;
				--noise2-primary-note: #f0bbd1;
				--noise3-secondary-channel: #4a8c8f;
				--noise3-primary-channel: #77c5dd;
				--noise3-secondary-note: #6fb4cf;
				--noise3-primary-note: #bbf2ff;
				--noise4-secondary-channel: #8e3e7d;
				--noise4-primary-channel: #c682d2;
				--noise4-secondary-note: #b871c1;
				--noise4-primary-note: #ffb8f0;
				--noise5-secondary-channel: #785e37;
				--noise5-primary-channel: #bb9d77;
				--noise5-secondary-note: #aa8c66;
				--noise5-primary-note: #e2d1b2;
				--mod1-secondary-channel: #4e8397;
				--mod1-primary-channel: #92e6f3;
				--mod1-secondary-note: #76b9d9;
				--mod1-primary-note: #cde3ff;
				--mod2-secondary-channel: #ad5774;
				--mod2-primary-channel: #eba4ae;
				--mod2-secondary-note: #c9719b;
				--mod2-primary-note: #fdcee7;
				--mod3-secondary-channel: #6f579f;
				--mod3-primary-channel: #b192f7;
				--mod3-secondary-note: #a778e1;
				--mod3-primary-note: #f8ddff;
				--mod4-secondary-channel: #a88a36;
				--mod4-primary-channel: #bec825;
				--mod4-secondary-note: #aecb57;
				--mod4-primary-note: #dee9bd;
				--mod-label-primary: #2c2c56;
				--mod-label-secondary-text: rgb(71,69,147);
				--mod-label-primary-text: white;
				--disabled-note-primary: #91879f;
				--disabled-note-secondary: #6a677a;


			}
		`,

		"roe": `
			:root {
				--page-margin: #050000;
				--editor-background: #050000;
				--hover-preview: white;
				--playhead: white;
				--primary-text: #b8cee0;
				--secondary-text: #cb3434;
				--inverted-text: black;
				--text-selection: rgb(255 68 68 / 99%);
				--box-selection-fill: rgb(255 0 0 / 30%);
				--loop-accent: #7744FF;
				--link-accent: #FF2A2A;
				--ui-widget-background: #1a2642;
				--ui-widget-focus: #2c3f6d;
				--pitch-background: #15111a;
				--tonic: #1b3041;
				--fifth-note: #381818;
				--white-piano-key: #cdcdcd;
				--black-piano-key: #232323;
				--use-color-formula: false;
				--track-editor-bg-pitch: #302938;
				--track-editor-bg-pitch-dim: #211c26;
				--track-editor-bg-noise: #261f42;
				--track-editor-bg-noise-dim: #1a152d;
				--track-editor-bg-mod: #183049;
				--track-editor-bg-mod-dim: #102132;
				--multiplicative-mod-slider: #344a7f;
				--overwriting-mod-slider: #344a7f;
				--indicator-primary: #FF2A2A;
				--indicator-secondary: #800000;
				--select2-opt-group: #141e34;
				--input-box-outline: #141e34;
				--mute-button-normal: #299eff;
				--mute-button-mod: #165a93;
				--pitch1-secondary-channel: #273c90;
				--pitch1-primary-channel: #476BFF;
				--pitch1-secondary-note: #273c90;
				--pitch1-primary-note: #476BFF;
				--pitch2-secondary-channel: #3a3898;
				--pitch2-primary-channel: #625FFB;
				--pitch2-secondary-note: #3a3898;
				--pitch2-primary-note: #625FFB;
				--pitch3-secondary-channel: #542780;
				--pitch3-primary-channel: #9C49EC;
				--pitch3-secondary-note: #542780;
				--pitch3-primary-note: #9C49EC;
				--pitch4-secondary-channel: #84225d;
				--pitch4-primary-channel: #fd3fb1;
				--pitch4-secondary-note: #84225d;
				--pitch4-primary-note: #fd3fb1;
				--pitch5-secondary-channel: #8d2323;
				--pitch5-primary-channel: #ff3f3f;
				--pitch5-secondary-note: #8d2323;
				--pitch5-primary-note: #ff3f3f;
				--pitch6-secondary-channel: #84225d;
				--pitch6-primary-channel: #fd3fb1;
				--pitch6-secondary-note: #84225d;
				--pitch6-primary-note: #fd3fb1;
				--pitch7-secondary-channel: #542780;
				--pitch7-primary-channel: #9C49EC;
				--pitch7-secondary-note: #542780;
				--pitch7-primary-note: #9C49EC;
				--pitch8-secondary-channel: #3a3898;
				--pitch8-primary-channel: #625FFB;
				--pitch8-secondary-note: #3a3898;
				--pitch8-primary-note: #625FFB;
				--pitch9-secondary-channel: #273c90;
				--pitch9-primary-channel: #476BFF;
				--pitch9-secondary-note: #273c90;
				--pitch9-primary-note: #476BFF;
				--pitch10-secondary-channel: #165a93;
				--pitch10-primary-channel: #299EFF;
				--pitch10-secondary-note: #165a93;
				--pitch10-primary-note: #299EFF;
				--noise1-secondary-channel: #4281FF;
				--noise1-primary-channel: #96b9ff;
				--noise1-secondary-note: #4281FF;
				--noise1-primary-note: #96b9ff;
				--noise2-secondary-channel: #7347FF;
				--noise2-primary-channel: #c3b0ff;
				--noise2-secondary-note: #7347FF;
				--noise2-primary-note: #c3b0ff;
				--noise3-secondary-channel: #9F3CBF;
				--noise3-primary-channel: #e29cf9;
				--noise3-secondary-note: #9F3CBF;
				--noise3-primary-note: #e29cf9;
				--noise4-secondary-channel: #D3326F;
				--noise4-primary-channel: #fb9bbf;
				--noise4-secondary-note: #D3326F;
				--noise4-primary-note: #fb9bbf;
				--noise5-secondary-channel: #FF2A2A;
				--noise5-primary-channel: #ffa2a2;
				--noise5-secondary-note: #FF2A2A;
				--noise5-primary-note: #ffa2a2;
				--mod1-secondary-channel: #47587a;
				--mod1-primary-channel: #96b9ff;
				--mod1-secondary-note: #47587a;
				--mod1-primary-note: #96b9ff;
				--mod2-secondary-channel: #716791;
				--mod2-primary-channel: #c3b0ff;
				--mod2-secondary-note: #716791;
				--mod2-primary-note: #c3b0ff;
				--mod3-secondary-channel: #6f4c7b;
				--mod3-primary-channel: #e29cf9;
				--mod3-secondary-note: #6f4c7b;
				--mod3-primary-note: #e29cf9;
				--mod4-secondary-channel: #9e6279;
				--mod4-primary-channel: #fb9bbf;
				--mod4-secondary-note: #9e6279;
				--mod4-primary-note: #fb9bbf;
				--mod-label-primary: #15111a;
				--mod-label-secondary-text: #cb3434;
				--mod-label-primary-text: white;
				--disabled-note-primary: #c9c9c9;
				--disabled-note-secondary: #616161;
			}
		`,

		"moonlight": `
			:root {
				--page-margin: #020514;
				--editor-background: #020514;
				--hover-preview: white;
				--playhead: white;
				--primary-text: #D4DCE9;
				--secondary-text: #3E87DA;
				--inverted-text: black;
				--text-selection: #03599bd9;
				--box-selection-fill: hsl(206deg 66% 41% / 85%);
				--loop-accent: #639BD6;
				--link-accent: #A8C6E8;
				--ui-widget-background: #1e2940;
				--ui-widget-focus: #2c4272;
				--pitch-background: #223849;
				--tonic: #33536c;
				--fifth-note: hsl(206deg 36% 16%);
				--white-piano-key: #c1bfe9;
				--black-piano-key: #454354;
				--use-color-formula: false;
				--track-editor-bg-pitch: #25568d80;
				--track-editor-bg-pitch-dim: #10253c80;
				--track-editor-bg-noise: #25568d80;
				--track-editor-bg-noise-dim: #10253c80;
				--track-editor-bg-mod: #25568d80;
				--track-editor-bg-mod-dim: #10253c80;
				--multiplicative-mod-slider: #0476cd;
				--overwriting-mod-slider: #035899;
				--indicator-primary: #57a1f4;
				--indicator-secondary: #1d5596;
				--select2-opt-group: #141e34;
				--input-box-outline: #141e34;
				--mute-button-normal: #6ebffc;
				--mute-button-mod: #0a92fa;
				--pitch1-secondary-channel: #47425c;
				--pitch1-primary-channel: #918bac;
				--pitch1-secondary-note: #6b6489;
				--pitch1-primary-note: #a8a3bf;
				--pitch2-secondary-channel: #626493;
				--pitch2-primary-channel: #bdbed3;
				--pitch2-secondary-note: #626493;
				--pitch2-primary-note: #bdbed3;
				--pitch3-secondary-channel: #6e89b4;
				--pitch3-primary-channel: #d4dce9;
				--pitch3-secondary-note: #6e89b4;
				--pitch3-primary-note: #d4dce9;
				--pitch4-secondary-channel: #4c77a9;
				--pitch4-primary-channel: #a8c6e8;
				--pitch4-secondary-note: #4c77a9;
				--pitch4-primary-note: #a8c6e8;
				--pitch5-secondary-channel: #314e6d;
				--pitch5-primary-channel: #639bd6;
				--pitch5-secondary-note: #46698f;
				--pitch5-primary-note: #639bd6;
				--pitch6-secondary-channel: #143d6b;
				--pitch6-primary-channel: #3e87da;
				--pitch6-secondary-note: #143d6b;
				--pitch6-primary-note: #3e87da;
				--pitch7-secondary-channel: #314e6d;
				--pitch7-primary-channel: #639bd6;
				--pitch7-secondary-note: #314e6d;
				--pitch7-primary-note: #639bd6;
				--pitch8-secondary-channel: #4c77a9;
				--pitch8-primary-channel: #a8c6e8;
				--pitch8-secondary-note: #4c77a9;
				--pitch8-primary-note: #a8c6e8;
				--pitch9-secondary-channel: #6e89b4;
				--pitch9-primary-channel: #d4dce9;
				--pitch9-secondary-note: #6e89b4;
				--pitch9-primary-note: #d4dce9;
				--pitch10-secondary-channel: #626493;
				--pitch10-primary-channel: #bdbed3;
				--pitch10-secondary-note: #626493;
				--pitch10-primary-note: #bdbed3;
				--noise1-secondary-channel: #4b4a55;
				--noise1-primary-channel: #9795a3;
				--noise1-secondary-note: #4b4a55;
				--noise1-primary-note: #9795a3;
				--noise2-secondary-channel: #858e9d;
				--noise2-primary-channel: #d7dce5;
				--noise2-secondary-note: #858e9d;
				--noise2-primary-note: #d7dce5;
				--noise3-secondary-channel: #394e65;
				--noise3-primary-channel: #809bb7;
				--noise3-secondary-note: #394e65;
				--noise3-primary-note: #809bb7;
				--noise4-secondary-channel: #37577b;
				--noise4-primary-channel: #6189b8;
				--noise4-secondary-note: #37577b;
				--noise4-primary-note: #6189b8;
				--noise5-secondary-channel: #223849;
				--noise5-primary-channel: #5588af;
				--noise5-secondary-note: #223849;
				--noise5-primary-note: #5588af;
				--mod1-secondary-channel: #3e336c;
				--mod1-primary-channel: #6d60a4;
				--mod1-secondary-note: #3e336c;
				--mod1-primary-note: #6d60a4;
				--mod2-secondary-channel: #716791;
				--mod2-primary-channel: #bdbed3;
				--mod2-secondary-note: #716791;
				--mod2-primary-note: #bdbed3;
				--mod3-secondary-channel: #6b91bd;
				--mod3-primary-channel: #4b8fdd;
				--mod3-secondary-note: #597ca7;
				--mod3-primary-note: #7eade3;
				--mod4-secondary-channel: #14559f;
				--mod4-primary-channel: #3386e6;
				--mod4-secondary-note: #14559f;
				--mod4-primary-note: #3386e6;
				--mod-label-primary: #5a6b87;
				--mod-label-secondary-text: #314468;
				--mod-label-primary-text: black;
				--disabled-note-primary: #d4dce9;
				--disabled-note-secondary: #516f9e;
			}`,

		"autumn": `
		:root {
			--page-margin: #060304;
			--editor-background: #060304;
			--hover-preview: white;
			--playhead: white;
			--primary-text: white;
			--secondary-text: #999;
			--inverted-text: black;
			--text-selection: rgb(115 80 76);
			--box-selection-fill: rgb(174 73 81 / 45%);
			--loop-accent: #834A69;
			--link-accent: #98f;
			--ui-widget-background: #2a2523;
			--ui-widget-focus: #4e4c44;
			--pitch-background: #121212;
			--tonic: #4f4f4f;
			--fifth-note: #222;
			--white-piano-key: #b59b9b;
			--black-piano-key: #231e1e;
			--use-color-formula: false;
			--track-editor-bg-pitch: #352f38;
			--track-editor-bg-pitch-dim: #232025;
			--track-editor-bg-noise: #3c3029;
			--track-editor-bg-noise-dim: #251d19;
			--track-editor-bg-mod: #202623;
			--track-editor-bg-mod-dim: #131715;
			--multiplicative-mod-slider: #D9D16E;
			--overwriting-mod-slider: #2D826F;
			--indicator-primary: #D9D16E;
			--indicator-secondary: #444226;
			--select2-opt-group: #20191c;
			--input-box-outline: #20191c;
			--mute-button-normal: var(--pitch2-primary-channel);
			--mute-button-mod: var(--pitch4-primary-channel);
			--pitch1-secondary-channel: #704a34;
			--pitch1-primary-channel: #D9895A;
			--pitch1-secondary-note: #704a34;
			--pitch1-primary-note: #D9895A;
			--pitch2-secondary-channel: #5f3538;
			--pitch2-primary-channel: #AE4951;
			--pitch2-secondary-note: #5f3538;
			--pitch2-primary-note: #AE4951;
			--pitch3-secondary-channel: #5c4336;
			--pitch3-primary-channel: #CA9A81;
			--pitch3-secondary-note: #5c4336;
			--pitch3-primary-note: #CA9A81;
			--pitch4-secondary-channel: #1d3143;
			--pitch4-primary-channel: #386995;
			--pitch4-secondary-note: #1d3143;
			--pitch4-primary-note: #386995;
			--pitch5-secondary-channel: #9c8a58;
			--pitch5-primary-channel: #D9D16E;
			--pitch5-secondary-note: #7c783f;
			--pitch5-primary-note: #D9D16E;
			--pitch6-secondary-channel: #886562;
			--pitch6-primary-channel: #D3A9A5;
			--pitch6-secondary-note: #886562;
			--pitch6-primary-note: #D3A9A5;
			--pitch7-secondary-channel: #1c3f37;
			--pitch7-primary-channel: #2D826F;
			--pitch7-secondary-note: #1c3f37;
			--pitch7-primary-note: #2D826F;
			--pitch8-secondary-channel: #442e2d;
			--pitch8-primary-channel: #815150;
			--pitch8-secondary-note: #442e2d;
			--pitch8-primary-note: #815150;
			--pitch9-secondary-channel: #8e6f60;
			--pitch9-primary-channel: #E5B8A1;
			--pitch9-secondary-note: #8e6f60;
			--pitch9-primary-note: #E5B8A1;
			--pitch10-secondary-channel: #4f3142;
			--pitch10-primary-channel: #834A69;
			--pitch10-secondary-note: #4f3142;
			--pitch10-primary-note: #834A69;
			--noise1-secondary-channel: #6b5346;
			--noise1-primary-channel: #b99c89;
			--noise1-secondary-note: #6b5346;
			--noise1-primary-note: #F0D0BB;
			--noise2-secondary-channel: #4a3839;
			--noise2-primary-channel: #9c6b6e;
			--noise2-secondary-note: #4a3839;
			--noise2-primary-note: #c18b8f;
			--noise3-secondary-channel: #2d3c4a;
			--noise3-primary-channel: #536e86;
			--noise3-secondary-note: #2d3c4a;
			--noise3-primary-note: #8fa8c0;
			--noise4-secondary-channel: #273f3a;
			--noise4-primary-channel: #4e8377;
			--noise4-secondary-note: #273f3a;
			--noise4-primary-note: #87baae;
			--noise5-secondary-channel: #372730;
			--noise5-primary-channel: #7f5e70;
			--noise5-secondary-note: #372730;
			--noise5-primary-note: #cc96b3;
			--mod1-secondary-channel: #783f1f;
			--mod1-primary-channel: #dc6d2c;
			--mod1-secondary-note: #783f1f;
			--mod1-primary-note: #dc6d2c;
			--mod2-secondary-channel: #0b3153;
			--mod2-primary-channel: #1464ac;
			--mod2-secondary-note: #0b3153;
			--mod2-primary-note: #1464ac;
			--mod3-secondary-channel: #075040;
			--mod3-primary-channel: #08a17f;
			--mod3-secondary-note: #075040;
			--mod3-primary-note: #08a17f;
			--mod4-secondary-channel: #631640;
			--mod4-primary-channel: #b4186d;
			--mod4-secondary-note: #631640;
			--mod4-primary-note: #b4186d;
			--mod-label-primary: #000;
			--mod-label-secondary-text: #707070;
			--mod-label-primary-text: white;
			--disabled-note-primary: #5d5d5d;
			--disabled-note-secondary: #292929;
		}`,

		"fruit": `
		:root {
			--page-margin: #040507;
			--editor-background: #040507;
			--hover-preview: white;
			--playhead: white;
			--primary-text: white;
			--secondary-text: #999;
			--inverted-text: black;
			--text-selection: rgb(115 103 76);
			--box-selection-fill: rgb(174 109 73 / 45%);
			--loop-accent: #EC897D;
			--link-accent: #FDE484;
			--ui-widget-background: #22222c;
			--ui-widget-focus: #39394c;
			--pitch-background: #101010;
			--tonic: #2c2d34;
			--fifth-note: #191a20;
			--white-piano-key: #bbbaba;
			--black-piano-key: #2d2d2d;
			--use-color-formula: false;
			--track-editor-bg-pitch: #2b2d40;
			--track-editor-bg-pitch-dim: #191a25;
			--track-editor-bg-noise: #3c3644;
			--track-editor-bg-noise-dim: #26222b;
			--track-editor-bg-mod: #322a2a;
			--track-editor-bg-mod-dim: #191515;
			--multiplicative-mod-slider: #977da9;
			--overwriting-mod-slider: #798FA7;
			--indicator-primary: #EAAC9D;
			--indicator-secondary: #5e413a;
			--select2-opt-group: #191920;
			--input-box-outline: #191920;
			--mute-button-normal: #798FA7;
			--mute-button-mod: #354457;
			--pitch1-secondary-channel: #91655a;
			--pitch1-primary-channel: #EAAC9D;
			--pitch1-secondary-note: #91655a;
			--pitch1-primary-note: #EAAC9D;
			--pitch2-secondary-channel: #8f6513;
			--pitch2-primary-channel: #FFAF12;
			--pitch2-secondary-note: #8f6513;
			--pitch2-primary-note: #FFAF12;
			--pitch3-secondary-channel: #212f46;
			--pitch3-primary-channel: #34558B;
			--pitch3-secondary-note: #212f46;
			--pitch3-primary-note: #34558B;
			--pitch4-secondary-channel: #2e6b5b;
			--pitch4-primary-channel: #4EC5A7;
			--pitch4-secondary-note: #2e6b5b;
			--pitch4-primary-note: #4EC5A7;
			--pitch5-secondary-channel: #555D46;
			--pitch5-primary-channel: #aabf84;
			--pitch5-secondary-note: #555D46;
			--pitch5-primary-note: #aabf84;
			--pitch6-secondary-channel: #A2553B;
			--pitch6-primary-channel: #e59a81;
			--pitch6-secondary-note: #A2553B;
			--pitch6-primary-note: #e59a81;
			--pitch7-secondary-channel: #7b4021;
			--pitch7-primary-channel: #FE813E;
			--pitch7-secondary-note: #7b4021;
			--pitch7-primary-note: #FE813E;
			--pitch8-secondary-channel: #847753;
			--pitch8-primary-channel: #EFDAA3;
			--pitch8-secondary-note: #847753;
			--pitch8-primary-note: #EFDAA3;
			--pitch9-secondary-channel: #2c3642;
			--pitch9-primary-channel: #798FA7;
			--pitch9-secondary-note: #2c3642;
			--pitch9-primary-note: #798FA7;
			--pitch10-secondary-channel: #0d4453;
			--pitch10-primary-channel: #107895;
			--pitch10-secondary-note: #0d4453;
			--pitch10-primary-note: #107895;
			--noise1-secondary-channel: #71617C;
			--noise1-primary-channel: #977da9;
			--noise1-secondary-note: #71617C;
			--noise1-primary-note: #977da9;
			--noise2-secondary-channel: #3B3D4A;
			--noise2-primary-channel: #707591;
			--noise2-secondary-note: #3B3D4A;
			--noise2-primary-note: #707591;
			--noise3-secondary-channel: #625f5e;
			--noise3-primary-channel: #A19D9C;
			--noise3-secondary-note: #625f5e;
			--noise3-primary-note: #A19D9C;
			--noise4-secondary-channel: #ab847b;
			--noise4-primary-channel: #EAAC9D;
			--noise4-secondary-note: #ab847b;
			--noise4-primary-note: #EAAC9D;
			--noise5-secondary-channel: #B49D74;
			--noise5-primary-channel: #dec69b;
			--noise5-secondary-note: #B49D74;
			--noise5-primary-note: #dec69b;
			--mod1-secondary-channel: #722124;
			--mod1-primary-channel: #D13A41;
			--mod1-secondary-note: #722124;
			--mod1-primary-note: #D13A41;
			--mod2-secondary-channel: #213657;
			--mod2-primary-channel: #34558B;
			--mod2-secondary-note: #213657;
			--mod2-primary-note: #34558B;
			--mod3-secondary-channel: #555D46;
			--mod3-primary-channel: #848f6d;
			--mod3-secondary-note: #555D46;
			--mod3-primary-note: #848f6d;
			--mod4-secondary-channel: #71617C;
			--mod4-primary-channel: #a68ab9;
			--mod4-secondary-note: #71617C;
			--mod4-primary-note: #a68ab9;
			--mod-label-primary: #282828;
			--mod-label-secondary-text: #707070;
			--mod-label-primary-text: white;
			--disabled-note-primary: #5d5d5d;
			--disabled-note-secondary: #292929;
		}`,

		"sunset": `
		:root {
			--page-margin: #040300;
			--editor-background: #040300;
			--hover-preview: white;
			--playhead: white;
			--primary-text: white;
			--secondary-text: #999;
			--inverted-text: black;
			--text-selection: rgb(94 0 157);
			--box-selection-fill: rgb(174 173 73 / 45%);
			--loop-accent: #EC897D;
			--link-accent: #FDE484;
			--ui-widget-background: #241b24;
			--ui-widget-focus: #3a2e39;
			--pitch-background: #141414;
			--tonic: #2C212B;
			--fifth-note: #2E2A15;
			--white-piano-key: #bbbaba;
			--black-piano-key: #2d2d2d;
			--use-color-formula: false;
			--track-editor-bg-pitch: #2d2e42;
			--track-editor-bg-pitch-dim: #191a25;
			--track-editor-bg-noise: #393340;
			--track-editor-bg-noise-dim: #26222b;
			--track-editor-bg-mod: #232a2c;
			--track-editor-bg-mod-dim: #151819;
			--multiplicative-mod-slider: #977da9;
			--overwriting-mod-slider: #798FA7;
			--indicator-primary: #F28891;
			--indicator-secondary: #601d23;
			--select2-opt-group: #151015;
			--input-box-outline: #151015;
			--mute-button-normal: #E4739D;
			--mute-button-mod: #9650A6;
			--pitch1-secondary-channel: #7F7721;
			--pitch1-primary-channel: #F3E79A;
			--pitch1-secondary-note: #7F7721;
			--pitch1-primary-note: #F3E79A;
			--pitch2-secondary-channel: #785E20;
			--pitch2-primary-channel: #F7D086;
			--pitch2-secondary-note: #785E20;
			--pitch2-primary-note: #F7D086;
			--pitch3-secondary-channel: #6E4219;
			--pitch3-primary-channel: #F9B881;
			--pitch3-secondary-note: #6E4219;
			--pitch3-primary-note: #F9B881;
			--pitch4-secondary-channel: #79351F;
			--pitch4-primary-channel: #F7A086;
			--pitch4-secondary-note: #79351F;
			--pitch4-primary-note: #F7A086;
			--pitch5-secondary-channel: #81272F;
			--pitch5-primary-channel: #F28891;
			--pitch5-secondary-note: #81272F;
			--pitch5-primary-note: #F28891;
			--pitch6-secondary-channel: #8F224D;
			--pitch6-primary-channel: #E4739D;
			--pitch6-secondary-note: #8F224D;
			--pitch6-primary-note: #E4739D;
			--pitch7-secondary-channel: #611548;
			--pitch7-primary-channel: #CF63A6;
			--pitch7-secondary-note: #611548;
			--pitch7-primary-note: #CF63A6;
			--pitch8-secondary-channel: #561253;
			--pitch8-primary-channel: #B557A9;
			--pitch8-secondary-note: #4D104A;
			--pitch8-primary-note: #B557A9;
			--pitch9-secondary-channel: #4c1260;
			--pitch9-primary-channel: #9650A6;
			--pitch9-secondary-note: #3C0F4C;
			--pitch9-primary-note: #9650A6;
			--pitch10-secondary-channel: #3e1d78;
			--pitch10-primary-channel: #704D9E;
			--pitch10-secondary-note: #27124C;
			--pitch10-primary-note: #704D9E;
			--noise1-secondary-channel: #A7A578;
			--noise1-primary-channel: #EFE9AC;
			--noise1-secondary-note: #A7A578;
			--noise1-primary-note: #EFE9AC;
			--noise2-secondary-channel: #947A5F;
			--noise2-primary-channel: #FBCEA8;
			--noise2-secondary-note: #947A5F;
			--noise2-primary-note: #FBCEA8;
			--noise3-secondary-channel: #A3635D;
			--noise3-primary-channel: #F4A5AB;
			--noise3-secondary-note: #A3635D;
			--noise3-primary-note: #F4A5AB;
			--noise4-secondary-channel: #724D60;
			--noise4-primary-channel: #CD90B6;
			--noise4-secondary-note: #724D60;
			--noise4-primary-note: #CD90B6;
			--noise5-secondary-channel: #503F5C;
			--noise5-primary-channel: #7C6A9E;
			--noise5-secondary-note: #503F5C;
			--noise5-primary-note: #7C6A9E;
			--mod1-secondary-channel: #371883;
			--mod1-primary-channel: #6416C6;
			--mod1-secondary-note: #1F0A52;
			--mod1-primary-note: #6416C6;
			--mod2-secondary-channel: #690645;
			--mod2-primary-channel: #E52FA2;
			--mod2-secondary-note: #690645;
			--mod2-primary-note: #E52FA2;
			--mod3-secondary-channel: #943618;
			--mod3-primary-channel: #eb5b2c;
			--mod3-secondary-note: #943618;
			--mod3-primary-note: #eb5b2c;
			--mod4-secondary-channel: #928409;
			--mod4-primary-channel: #ecd50e;
			--mod4-secondary-note: #928409;
			--mod4-primary-note: #ecd50e;
			--mod-label-primary: #282828;
			--mod-label-secondary-text: #707070;
			--mod-label-primary-text: white;
			--disabled-note-primary: #5d5d5d;
			--disabled-note-secondary: #292929;
		}`,

		"toxic": `
		:root {
			--page-margin: #010003;
			--editor-background: #010003;
			--hover-preview: white;
			--playhead: white;
			--primary-text: white;
			--secondary-text: #999;
			--inverted-text: black;
			--text-selection: rgb(147 195 0);
			--box-selection-fill: rgb(145 174 73 / 49%);
			--loop-accent: #BCDE2C;
			--link-accent: #edff9f;
			--ui-widget-background: #261e2e;
			--ui-widget-focus: #322042;
			--pitch-background: #141c15;
			--tonic: #282c21;
			--fifth-note: #18221a;
			--white-piano-key: #e3e3e3;
			--black-piano-key: #2d2d2d;
			--use-color-formula: false;
			--track-editor-bg-pitch: #38293e;
			--track-editor-bg-pitch-dim: #251c29;
			--track-editor-bg-noise: #2c304c;
			--track-editor-bg-noise-dim: #191b2b;
			--track-editor-bg-mod: #311b32;
			--track-editor-bg-mod-dim: #1d101e;
			--multiplicative-mod-slider: #977da9;
			--overwriting-mod-slider: #798FA7;
			--indicator-primary: #aae9ff;
			--indicator-secondary: #253e46;
			--select2-opt-group: #110d15;
			--input-box-outline: #110d15;
			--mute-button-normal: #8f5ad1;
			--mute-button-mod: #482574;
			--pitch1-secondary-channel: #6b7f19;
			--pitch1-primary-channel: #BCDE2C;
			--pitch1-secondary-note: #6b7f19;
			--pitch1-primary-note: #BCDE2C;
			--pitch2-secondary-channel: #497a31;
			--pitch2-primary-channel: #7BD152;
			--pitch2-secondary-note: #497a31;
			--pitch2-primary-note: #7BD152;
			--pitch3-secondary-channel: #286b40;
			--pitch3-primary-channel: #45BE71;
			--pitch3-secondary-note: #286b40;
			--pitch3-primary-note: #45BE71;
			--pitch4-secondary-channel: #125140;
			--pitch4-primary-channel: #25A884;
			--pitch4-secondary-note: #125140;
			--pitch4-primary-note: #25A884;
			--pitch5-secondary-channel: #114c49;
			--pitch5-primary-channel: #21908C;
			--pitch5-secondary-note: #114c49;
			--pitch5-primary-note: #21908C;
			--pitch6-secondary-channel: #143843;
			--pitch6-primary-channel: #2B788E;
			--pitch6-secondary-note: #143843;
			--pitch6-primary-note: #2B788E;
			--pitch7-secondary-channel: #1d354e;
			--pitch7-primary-channel: #355F8D;
			--pitch7-secondary-note: #1a2f46;
			--pitch7-primary-note: #355F8D;
			--pitch8-secondary-channel: #2c2e5a;
			--pitch8-primary-channel: #414486;
			--pitch8-secondary-note: #1e1f3d;
			--pitch8-primary-note: #414486;
			--pitch9-secondary-channel: #3c1f5e;
			--pitch9-primary-channel: #5e3b89;
			--pitch9-secondary-note: #25133b;
			--pitch9-primary-note: #5e3b89;
			--pitch10-secondary-channel: #510264;
			--pitch10-primary-channel: #720d8a;
			--pitch10-secondary-note: #440154;
			--pitch10-primary-note: #720d8a;
			--noise1-secondary-channel: #BCDE2C;
			--noise1-primary-channel: #edff9f;
			--noise1-secondary-note: #BCDE2C;
			--noise1-primary-note: #edff9f;
			--noise2-secondary-channel: #45BE71;
			--noise2-primary-channel: #89ffb4;
			--noise2-secondary-note: #45BE71;
			--noise2-primary-note: #89ffb4;
			--noise3-secondary-channel: #21908C;
			--noise3-primary-channel: #72fffa;
			--noise3-secondary-note: #21908C;
			--noise3-primary-note: #72fffa;
			--noise4-secondary-channel: #355F8D;
			--noise4-primary-channel: #7cb6f5;
			--noise4-secondary-note: #355F8D;
			--noise4-primary-note: #7cb6f5;
			--noise5-secondary-channel: #482574;
			--noise5-primary-channel: #8f5ad1;
			--noise5-secondary-note: #48257A;
			--noise5-primary-note: #8f5ad1;
			--mod1-secondary-channel: #815a16;
			--mod1-primary-channel: #F5AB29;
			--mod1-secondary-note: #815a16;
			--mod1-primary-note: #F5AB29;
			--mod2-secondary-channel: #4d341a;
			--mod2-primary-channel: #C98540;
			--mod2-secondary-note: #4d341a;
			--mod2-primary-note: #C98540;
			--mod3-secondary-channel: #643734;
			--mod3-primary-channel: #A75D58;
			--mod3-secondary-note: #643734;
			--mod3-primary-note: #A75D58;
			--mod4-secondary-channel: #461430;
			--mod4-primary-channel: #812359;
			--mod4-secondary-note: #3f112b;
			--mod4-primary-note: #812359;
			--mod-label-primary: #282828;
			--mod-label-secondary-text: #707070;
			--mod-label-primary-text: white;
			--disabled-note-primary: #5d5d5d;
			--disabled-note-secondary: #292929;
		}`,

		"violet verdant": `
		:root {
			--page-margin: #0e031a;
			--editor-background: #0e031a;
			--hover-preview: #e5ffea;
			--playhead: rgba(255, 255, 255, 0.9);
			--primary-text: #f0e0ff;
			--secondary-text: #706087;
			--inverted-text: black;
			--text-selection: rgba(119,68,255,0.99);
			--box-selection-fill: #225835;
			--loop-accent: #8f00fb;
			--link-accent: #82dd5d;
			--ui-widget-background: #303c66;
			--ui-widget-focus: #62559b;
			--pitch-background: #293b52;
			--tonic: #5b46ad;
			--fifth-note: #42604d;
			--white-piano-key: #f6e8ff;
			--black-piano-key: #5a4972;
			--use-color-formula: true;
			--track-editor-bg-pitch: #392a46;
			--track-editor-bg-pitch-dim: #1c1d28;
			--track-editor-bg-noise: #403150;
			--track-editor-bg-noise-dim: #161313;
			--track-editor-bg-mod: #253c25;
			--track-editor-bg-mod-dim: #0c1811;
			--multiplicative-mod-slider: #606c9f;
			--overwriting-mod-slider: #6850b5;
			--indicator-primary: #9c64f7;
			--indicator-secondary: #393e4f;
			--select2-opt-group: #5d576f;
			--input-box-outline: #403150;
			--mute-button-normal: #82dd5d;
			--mute-button-mod: #945de5;
			--mod-label-primary: #312840;
			--mod-label-secondary-text: rgb(88 70 104);
			--mod-label-primary-text: #82dd5d;
			--pitch-secondary-channel-hue: 64;
			--pitch-secondary-channel-hue-scale: 6.1;
			--pitch-secondary-channel-sat: 63.3;
			--pitch-secondary-channel-sat-scale: 0.1;
			--pitch-secondary-channel-lum: 40;
			--pitch-secondary-channel-lum-scale: 0.05;
			--pitch-primary-channel-hue: 64;
			--pitch-primary-channel-hue-scale: 6.1;
			--pitch-primary-channel-sat: 90;
			--pitch-primary-channel-sat-scale: 0.1;
			--pitch-primary-channel-lum: 67.5;
			--pitch-primary-channel-lum-scale: 0.05;
			--pitch-secondary-note-hue: 32;
			--pitch-secondary-note-hue-scale: 6.1;
			--pitch-secondary-note-sat: 87.9;
			--pitch-secondary-note-sat-scale: 0.1;
			--pitch-secondary-note-lum: 25;
			--pitch-secondary-note-lum-scale: 0.05;
			--pitch-primary-note-hue: 64;
			--pitch-primary-note-hue-scale: 6.1;
			--pitch-primary-note-sat: 90;
			--pitch-primary-note-sat-scale: 0.05;
			--pitch-primary-note-lum: 85.6;
			--pitch-primary-note-lum-scale: 0.025;
			--noise-secondary-channel-hue: 192;
			--noise-secondary-channel-hue-scale: 2;
			--noise-secondary-channel-sat: 45;
			--noise-secondary-channel-sat-scale: 0;
			--noise-secondary-channel-lum: 32;
			--noise-secondary-channel-lum-scale: 0;
			--noise-primary-channel-hue: 192;
			--noise-primary-channel-hue-scale: 2;
			--noise-primary-channel-sat: 33;
			--noise-primary-channel-sat-scale: 0;
			--noise-primary-channel-lum: 43.5;
			--noise-primary-channel-lum-scale: 0;
			--noise-secondary-note-hue: 160;
			--noise-secondary-note-hue-scale: 2;
			--noise-secondary-note-sat: 33.5;
			--noise-secondary-note-sat-scale: 0;
			--noise-secondary-note-lum: 45;
			--noise-secondary-note-lum-scale: 0;
			--noise-primary-note-hue: 192;
			--noise-primary-note-hue-scale: 2;
			--noise-primary-note-sat: 46.5;
			--noise-primary-note-sat-scale: 0;
			--noise-primary-note-lum: 74;
			--noise-primary-note-lum-scale: 0;
			--mod-secondary-channel-hue: 132;
			--mod-secondary-channel-hue-scale: 1.5;
			--mod-secondary-channel-sat: 88;
			--mod-secondary-channel-sat-scale: 0;
			--mod-secondary-channel-lum: 50;
			--mod-secondary-channel-lum-scale: 0;
			--mod-primary-channel-hue: 132;
			--mod-primary-channel-hue-scale: 1.5;
			--mod-primary-channel-sat: 96;
			--mod-primary-channel-sat-scale: 0;
			--mod-primary-channel-lum: 80;
			--mod-primary-channel-lum-scale: 0;
			--mod-secondary-note-hue: 100;
			--mod-secondary-note-hue-scale: 1.5;
			--mod-secondary-note-sat: 92;
			--mod-secondary-note-sat-scale: 0;
			--mod-secondary-note-lum: 45;
			--mod-secondary-note-lum-scale: 0;
			--mod-primary-note-hue: 132;
			--mod-primary-note-hue-scale: 1.5;
			--mod-primary-note-sat: 96;
			--mod-primary-note-sat-scale: 0;
			--mod-primary-note-lum: 85;
			--mod-primary-note-lum-scale: 0;
			--disabled-note-primary: #91879f;
			--disabled-note-secondary: #6a677a;
		}`,

		"portal": `
		:root {
		--page-margin: #04081a;
		--editor-background: #04081a;
		--hover-preview: white;
		--playhead: white;
		--primary-text: white;
		--secondary-text: #999;
		--inverted-text: black;
		--text-selection: rgba(119,68,255,0.99);
		--box-selection-fill: rgb(0 72 181);
		--loop-accent: #44d4ff;
		--link-accent: #ffa500;
		--ui-widget-background: #212c4a;
		--ui-widget-focus: #121f42;
		--pitch-background: #1b263e;
		--tonic: #995d00;
		--fifth-note: #0898a1;
		--white-piano-key: #ffffff;
		--black-piano-key: #516d7a;
		--use-color-formula: false;
		--track-editor-bg-pitch: #213352;
		--track-editor-bg-pitch-dim: #152032;
		--track-editor-bg-noise: #403524;
		--track-editor-bg-noise-dim: #2a1f0e;
		--track-editor-bg-mod: #234;
		--track-editor-bg-mod-dim: #123;
		--multiplicative-mod-slider: #456;
		--overwriting-mod-slider: #654;
		--indicator-primary: #5490ff;
		--indicator-secondary: #444;
		--select2-opt-group: #585858;
		--input-box-outline: #333;
		--mute-button-normal: #3372ff;
		--mute-button-mod: #dd872f;
		--pitch1-secondary-channel: #0099A1;
		--pitch1-primary-channel: #77f7ff;
		--pitch1-secondary-note: #00BDC7;
		--pitch1-primary-note: #92F9FF;
		--pitch2-secondary-channel: #0083a1;
		--pitch2-primary-channel: #35d9ff;
		--pitch2-secondary-note: #0083a1;
		--pitch2-primary-note: #a4eeff;
		--pitch3-secondary-channel: #0074c7;
		--pitch3-primary-channel: #3caeff;
		--pitch3-secondary-note: #00477a;
		--pitch3-primary-note: #aadcff;
		--pitch4-secondary-channel: #0039a1;
		--pitch4-primary-channel: #2673ff;
		--pitch4-secondary-note: #001f56;
		--pitch4-primary-note: #9bbeff;
		--pitch5-secondary-channel: #31148b;
		--pitch5-primary-channel: #7042ff;
		--pitch5-secondary-note: #190656;
		--pitch5-primary-note: #b79fff;
		--pitch6-secondary-channel: #979934;
		--pitch6-primary-channel: #fbff2f;
		--pitch6-secondary-note: #5d5e0a;
		--pitch6-primary-note: #fdff9a;
		--pitch7-secondary-channel: #b78f00;
		--pitch7-primary-channel: #ffd747;
		--pitch7-secondary-note: #5e3d00;
		--pitch7-primary-note: #ffe381;
		--pitch8-secondary-channel: #9d6500;
		--pitch8-primary-channel: #ffa400;
		--pitch8-secondary-note: #583900;
		--pitch8-primary-note: #ffd07c;
		--pitch9-secondary-channel: #744203;
		--pitch9-primary-channel: #ff8e00;
		--pitch9-secondary-note: #502d00;
		--pitch9-primary-note: #ffcb89;
		--pitch10-secondary-channel: #a32d00;
		--pitch10-primary-channel: #ff885b;
		--pitch10-secondary-note: #521700;
		--pitch10-primary-note: #ffb397;
		--noise1-secondary-channel: #6e2210;
		--noise1-primary-channel: #ff4600;
		--noise1-secondary-note: #4c1a08;
		--noise1-primary-note: #ffc9b4;
		--noise2-secondary-channel: #6a3110;
		--noise2-primary-channel: #ff782a;
		--noise2-secondary-note: #4c1f05;
		--noise2-primary-note: #ffb488;
		--noise3-secondary-channel: #72460e;
		--noise3-primary-channel: #d9871f;
		--noise3-secondary-note: #442905;
		--noise3-primary-note: #ffdcae;
		--noise4-secondary-channel: #837a0f;
		--noise4-primary-channel: #f7ea55;
		--noise4-secondary-note: #605906;
		--noise4-primary-note: #fff9ab;
		--noise5-secondary-channel: #8c8f00;
		--noise5-primary-channel: #fdff90;
		--noise5-secondary-note: #606200;
		--noise5-primary-note: #feffbc;
		--mod1-secondary-channel: #561b97;
		--mod1-primary-channel: #aa66f5;
		--mod1-secondary-note: #30075c;
		--mod1-primary-note: #cd9fff;
		--mod2-secondary-channel: #5116df;
		--mod2-primary-channel: #6b2dff;
		--mod2-secondary-note: #36138b;
		--mod2-primary-note: #bea3ff;
		--mod3-secondary-channel: #2535a1;
		--mod3-primary-channel: #3f57ff;
		--mod3-secondary-note: #0e185c;
		--mod3-primary-note: #8494ff;
		--mod4-secondary-channel: #1b5883;
		--mod4-primary-channel: #5eb7f5;
		--mod4-secondary-note: #072f4a;
		--mod4-primary-note: #63beff;
		--mod-label-primary: #24293a;
		--mod-label-secondary-text: #454d4e;
		--mod-label-primary-text: #7bd4ff;
		--disabled-note-primary: #072f4a;
		--disabled-note-secondary: #6585a7;
		}`,

		"fusion":
		`:root {
		--page-margin: #0c0306;
		--editor-background: #0c0306;
		--hover-preview: white;
		--playhead: white;
		--primary-text: #26d9cd;
		--secondary-text: #ff6666;
		--inverted-text: white;
		--text-selection: #ffffff;
		--box-selection-fill: #ff00004d;
		--loop-accent: #ff6666;
		--link-accent: white;
		--ui-widget-background: #232323;
		--ui-widget-focus: #303030;
		--pitch-background: hsl(61deg 100% 70% / 25%);
		--tonic: #66a3ff40;
		--fifth-note: #ff666640;
		--white-piano-key: #cdcdcd;
		--black-piano-key: #232323;
		--use-color-formula: false;
		--track-editor-bg-pitch: #404040bf;
		--track-editor-bg-pitch-dim: #151515;
		--track-editor-bg-noise: #404040bf;
		--track-editor-bg-noise-dim: #151515;
		--track-editor-bg-mod: #404040bf;
		--track-editor-bg-mod-dim: #151515;
		--multiplicative-mod-slider: #ef7692;
		--overwriting-mod-slider: #f43e69;
		--indicator-primary: #26d9cd;
		--indicator-secondary: hsl(176deg 70% 25%);
		--select2-opt-group: #232323;
		--input-box-outline: #141e34;
		--mute-button-normal: #26d9cd;
		--mute-button-mod: hsl(346deg 70% 50%);
		--pitch1-secondary-channel: #bf4040;
		--pitch1-primary-channel: #ff6666;
		--pitch1-secondary-note: #bf4040;
		--pitch1-primary-note: #ff6666;
		--pitch2-secondary-channel: #bf5b40;
		--pitch2-primary-channel: #ff8766;
		--pitch2-secondary-note: #bf5b40;
		--pitch2-primary-note: #ff8766;
		--pitch3-secondary-channel: #bf7940;
		--pitch3-primary-channel: #ffab66;
		--pitch3-secondary-note: #bf7940;
		--pitch3-primary-note: #ffab66;
		--pitch4-secondary-channel: #bf9b40;
		--pitch4-primary-channel: #ffd466;
		--pitch4-secondary-note: #bf9b40;
		--pitch4-primary-note: #ffd466;
		--pitch5-secondary-channel: #bdbf40;
		--pitch5-primary-channel: #fcff66;
		--pitch5-secondary-note: #bdbf40;
		--pitch5-primary-note: #fcff66;
		--pitch6-secondary-channel: #9dbf40;
		--pitch6-primary-channel: #d6ff66;
		--pitch6-secondary-note: #9dbf40;
		--pitch6-primary-note: #d6ff66;
		--pitch7-secondary-channel: #9dbf40;
		--pitch7-primary-channel: #fcff66;
		--pitch7-secondary-note: #9dbf40;
		--pitch7-primary-note: #fcff66;
		--pitch8-secondary-channel: #bf9b40;
		--pitch8-primary-channel: #ffd466;
		--pitch8-secondary-note: #bf9b40;
		--pitch8-primary-note: #ffd466;
		--pitch9-secondary-channel: #bf5b40;
		--pitch9-primary-channel: #ffab66;
		--pitch9-secondary-note: #bf5b40;
		--pitch9-primary-note: #ffab66;
		--pitch10-secondary-channel: #d15a1f;
		--pitch10-primary-channel: #ff8766;
		--pitch10-secondary-note: #d15a1f;
		--pitch10-primary-note: #ff8766;
		--noise1-secondary-channel: #4073bf;
		--noise1-primary-channel: #66a3ff;
		--noise1-secondary-note: #4073bf;
		--noise1-primary-note: #66a3ff;
		--noise2-secondary-channel: #405dbf;
		--noise2-primary-channel: #668aff;
		--noise2-secondary-note: #405dbf;
		--noise2-primary-note: #668aff;
		--noise3-secondary-channel: #4f40bf;
		--noise3-primary-channel: #7866ff;
		--noise3-secondary-note: #4f40bf;
		--noise3-primary-note: #7866ff;
		--noise4-secondary-channel: #8840bf;
		--noise4-primary-channel: #bd66ff;
		--noise4-secondary-note: #8840bf;
		--noise4-primary-note: #bd66ff;
		--noise5-secondary-channel: #bf40b5;
		--noise5-primary-channel: #ff66f2;
		--noise5-secondary-note: #bf40b5;
		--noise5-primary-note: #ff66f2;
		--mod1-secondary-channel: #cc6666;
		--mod1-primary-channel: #ff9999;
		--mod1-secondary-note: #cc6666;
		--mod1-primary-note: #ff9999;
		--mod2-secondary-channel: #cc7766;
		--mod2-primary-channel: #ffaa99;
		--mod2-secondary-note: #bf5540;
		--mod2-primary-note: #ffaa99;
		--mod3-secondary-channel: #cc8866;
		--mod3-primary-channel: #ffbb99;
		--mod3-secondary-note: #cc8866;
		--mod3-primary-note: #ffbb99;
		--mod4-secondary-channel: #cc9966;
		--mod4-primary-channel: #ffcc99;
		--mod4-secondary-note: #cc9966;
		--mod4-primary-note: #ffcc99;
		--mod-label-primary: #999;
		--mod-label-secondary-text: #333;
		--mod-label-primary-text: black;
		--disabled-note-primary: #696969;
		--disabled-note-secondary: #232323;
		}`,

		"inverse":
			`:root {
				--page-margin: #c4c8e3;
				--editor-background: #c4c8e3;
				--hover-preview: #000000;
				--playhead: #243953;
				--primary-text: black;
				--secondary-text: #855b95;
				--inverted-text: black;
				--text-selection: rgb(132 125 255);
				--box-selection-fill: rgb(174 109 73 / 65%);
				--loop-accent: #EC897D;
				--link-accent: #4e00c8;
				--ui-widget-background: #e7e7ff;
				--ui-widget-focus: #d0d3e9;
				--pitch-background: #ffffff;
				--tonic: #bbbbbb;
				--fifth-note: #dcdcdc;
				--white-piano-key: #ffffff;
				--black-piano-key: #615f66;
				--use-color-formula: false;
				--track-editor-bg-pitch: #e9ebff;
				--track-editor-bg-pitch-dim: #e9ebff;
				--track-editor-bg-noise: #fdf2fe;
				--track-editor-bg-noise-dim: #fdf2fe;
				--track-editor-bg-mod: #dbdefe;
				--track-editor-bg-mod-dim: #dbdefe;
				--multiplicative-mod-slider: #6900b3;
				--overwriting-mod-slider: #004b9d;
				--indicator-primary: #ff633d;
				--indicator-secondary: #933822;
				--select2-opt-group: #e7e7ff;
				--input-box-outline: #e7e7ff;
				--mute-button-normal: #0072ef;
				--mute-button-mod: #002e67;
				--pitch1-secondary-channel: #b77d6e;
				--pitch1-primary-channel: #ff9d85;
				--pitch1-secondary-note: #b77d6e;
				--pitch1-primary-note: #ff9d85;
				--pitch2-secondary-channel: #be8821;
				--pitch2-primary-channel: #FFAF12;
				--pitch2-secondary-note: #be8821;
				--pitch2-primary-note: #FFAF12;
				--pitch3-secondary-channel: #3a62a4;
				--pitch3-primary-channel: #528ae6;
				--pitch3-secondary-note: #3a62a4;
				--pitch3-primary-note: #528ae6;
				--pitch4-secondary-channel: #3e8d78;
				--pitch4-primary-channel: #4EC5A7;
				--pitch4-secondary-note: #3e8d78;
				--pitch4-primary-note: #4EC5A7;
				--pitch5-secondary-channel: #84906d;
				--pitch5-primary-channel: #aabf84;
				--pitch5-secondary-note: #84906d;
				--pitch5-primary-note: #aabf84;
				--pitch6-secondary-channel: #bd6345;
				--pitch6-primary-channel: #e59a81;
				--pitch6-secondary-note: #bd6345;
				--pitch6-primary-note: #e59a81;
				--pitch7-secondary-channel: #aa592f;
				--pitch7-primary-channel: #FE813E;
				--pitch7-secondary-note: #aa592f;
				--pitch7-primary-note: #FE813E;
				--pitch8-secondary-channel: #b2a171;
				--pitch8-primary-channel: #ffd76d;
				--pitch8-secondary-note: #b2a171;
				--pitch8-primary-note: #ffd76d;
				--pitch9-secondary-channel: #4f6177;
				--pitch9-primary-channel: #798FA7;
				--pitch9-secondary-note: #4f6177;
				--pitch9-primary-note: #798FA7;
				--pitch10-secondary-channel: #165162;
				--pitch10-primary-channel: #107895;
				--pitch10-secondary-note: #165162;
				--pitch10-primary-note: #107895;
				--noise1-secondary-channel: #71617C;
				--noise1-primary-channel: #977da9;
				--noise1-secondary-note: #71617C;
				--noise1-primary-note: #977da9;
				--noise2-secondary-channel: #4a4c5b;
				--noise2-primary-channel: #707591;
				--noise2-secondary-note: #4a4c5b;
				--noise2-primary-note: #707591;
				--noise3-secondary-channel: #817c7b;
				--noise3-primary-channel: #A19D9C;
				--noise3-secondary-note: #817c7b;
				--noise3-primary-note: #A19D9C;
				--noise4-secondary-channel: #ab847b;
				--noise4-primary-channel: #EAAC9D;
				--noise4-secondary-note: #ab847b;
				--noise4-primary-note: #EAAC9D;
				--noise5-secondary-channel: #B49D74;
				--noise5-primary-channel: #dec69b;
				--noise5-secondary-note: #B49D74;
				--noise5-primary-note: #dec69b;
				--mod1-secondary-channel: #722124;
				--mod1-primary-channel: #D13A41;
				--mod1-secondary-note: #722124;
				--mod1-primary-note: #D13A41;
				--mod2-secondary-channel: #213657;
				--mod2-primary-channel: #34558B;
				--mod2-secondary-note: #213657;
				--mod2-primary-note: #34558B;
				--mod3-secondary-channel: #555D46;
				--mod3-primary-channel: #848f6d;
				--mod3-secondary-note: #555D46;
				--mod3-primary-note: #848f6d;
				--mod4-secondary-channel: #71617C;
				--mod4-primary-channel: #a68ab9;
				--mod4-secondary-note: #71617C;
				--mod4-primary-note: #a68ab9;
				--mod-label-primary: #e9e9e9;
				--mod-label-secondary-text: #707070;
				--mod-label-primary-text: black;
				--disabled-note-primary: #959595;
				--disabled-note-secondary: #6e6e6e;
			}`,

		"nebula": `
		:root {
			--page-margin: #040410;
			--editor-background: #150e1f;
			--hover-preview: white;
			--playhead: rgba(255, 255, 255, 0.9);
			--primary-text: white;
			--secondary-text: #8C849A;
			--inverted-text: black;
			--text-selection: rgba(141,79,201,0.99);
			--box-selection-fill: #311E44;
			--loop-accent: #CC688C;
			--link-accent: #817DC9;
			--ui-widget-background: #44394F;
			--ui-widget-focus: #7A6386;
			--pitch-background: #393e4f40;
			--tonic: #7D5C9EC0;
			--fifth-note: #ab77bd50;
			--white-piano-key: #EEEEEE;
			--black-piano-key: #5F5566;
			--use-color-formula: true;
			--track-editor-bg-pitch: #46374C;
			--track-editor-bg-pitch-dim: #1F1C2850;
			--track-editor-bg-noise: #3D353B;
			--track-editor-bg-noise-dim: #16131550;
			--track-editor-bg-mod: #623F4C;
			--track-editor-bg-mod-dim: #361A2450;
			--multiplicative-mod-slider: #9F6E6A;
			--overwriting-mod-slider: #A664B5;
			--indicator-primary: #CC6B8E;
			--indicator-secondary: #44394F;
			--select2-opt-group: #6A576F;
			--input-box-outline: #222;
			--mute-button-normal: #BF91DC;
			--mute-button-mod: #DC8C9A;
			--mod-label-primary: #3A2840;
			--mod-label-secondary-text: #62485E;
			--mod-label-primary-text: white;
			--pitch-secondary-channel-hue: -96;
			--pitch-secondary-channel-hue-scale: 4.2;
			--pitch-secondary-channel-sat: 50.3;
			--pitch-secondary-channel-sat-scale: 0.1;
			--pitch-secondary-channel-lum: 40;
			--pitch-secondary-channel-lum-scale: 0.05;
			--pitch-primary-channel-hue: -96;
			--pitch-primary-channel-hue-scale: 4.2;
			--pitch-primary-channel-sat: 70;
			--pitch-primary-channel-sat-scale: 0.1;
			--pitch-primary-channel-lum: 67.5;
			--pitch-primary-channel-lum-scale: 0.05;
			--pitch-secondary-note-hue: -96;
			--pitch-secondary-note-hue-scale: 4.2;
			--pitch-secondary-note-sat: 70.9;
			--pitch-secondary-note-sat-scale: 0.1;
			--pitch-secondary-note-lum: 25;
			--pitch-secondary-note-lum-scale: 0.05;
			--pitch-primary-note-hue: -96;
			--pitch-primary-note-hue-scale: 4.2;
			--pitch-primary-note-sat: 90;
			--pitch-primary-note-sat-scale: 0.05;
			--pitch-primary-note-lum: 85.6;
			--pitch-primary-note-lum-scale: 0.025;
			--noise-secondary-channel-hue: 16;
			--noise-secondary-channel-hue-scale: -1.33;
			--noise-secondary-channel-sat: 25;
			--noise-secondary-channel-sat-scale: 0;
			--noise-secondary-channel-lum: 42;
			--noise-secondary-channel-lum-scale: 0;
			--noise-primary-channel-hue: 16;
			--noise-primary-channel-hue-scale: -1.33;
			--noise-primary-channel-sat: 33;
			--noise-primary-channel-sat-scale: 0;
			--noise-primary-channel-lum: 63.5;
			--noise-primary-channel-lum-scale: 0;
			--noise-secondary-note-hue: 12;
			--noise-secondary-note-hue-scale: -1.33;
			--noise-secondary-note-sat: 33.5;
			--noise-secondary-note-sat-scale: 0;
			--noise-secondary-note-lum: 55;
			--noise-secondary-note-lum-scale: 0;
			--noise-primary-note-hue: 12;
			--noise-primary-note-hue-scale: -1.33;
			--noise-primary-note-sat: 46.5;
			--noise-primary-note-sat-scale: 0;
			--noise-primary-note-lum: 74;
			--noise-primary-note-lum-scale: 0;
			--mod-secondary-channel-hue: 12;
			--mod-secondary-channel-hue-scale: -.75;
			--mod-secondary-channel-sat: 50;
			--mod-secondary-channel-sat-scale: 0;
			--mod-secondary-channel-lum: 50;
			--mod-secondary-channel-lum-scale: 0;
			--mod-primary-channel-hue: 12;
			--mod-primary-channel-hue-scale: -.75;
			--mod-primary-channel-sat: 70;
			--mod-primary-channel-sat-scale: 0;
			--mod-primary-channel-lum: 80;
			--mod-primary-channel-lum-scale: 0;
			--mod-secondary-note-hue: 12;
			--mod-secondary-note-hue-scale: -.75;
			--mod-secondary-note-sat: 75;
			--mod-secondary-note-sat-scale: 0;
			--mod-secondary-note-lum: 45;
			--mod-secondary-note-lum-scale: 0;
			--mod-primary-note-hue: 12;
			--mod-primary-note-hue-scale: -.75;
			--mod-primary-note-sat: 85;
			--mod-primary-note-sat-scale: 0;
			--mod-primary-note-lum: 85;
			--mod-primary-note-lum-scale: 0;
			--disabled-note-primary: #aaa;
			--disabled-note-secondary: #666;
		}`,
    };

    public static readonly pageMargin: string = "var(--page-margin)";
    public static readonly editorBackground: string = "var(--editor-background)";
    public static readonly hoverPreview: string = "var(--hover-preview)";
    public static readonly playhead: string = "var(--playhead)";
    public static readonly primaryText: string = "var(--primary-text)";
    public static readonly secondaryText: string = "var(--secondary-text)";
    public static readonly invertedText: string = "var(--inverted-text)";
    public static readonly textSelection: string = "var(--text-selection)";
    public static readonly boxSelectionFill: string = "var(--box-selection-fill)";
    public static readonly loopAccent: string = "var(--loop-accent)";
    public static readonly linkAccent: string = "var(--link-accent)";
    public static readonly uiWidgetBackground: string = "var(--ui-widget-background)";
    public static readonly uiWidgetFocus: string = "var(--ui-widget-focus)";
    public static readonly pitchBackground: string = "var(--pitch-background)";
    public static readonly tonic: string = "var(--tonic)";
    public static readonly fifthNote: string = "var(--fifth-note)";
    public static readonly whitePianoKey: string = "var(--white-piano-key)";
    public static readonly blackPianoKey: string = "var(--black-piano-key)";
    public static readonly useColorFormula: string = "var(--use-color-formula)";
    public static readonly pitchSecondaryChannelHue: string = "var(--pitch-secondary-channel-hue)";
    public static readonly pitchSecondaryChannelHueScale: string = "var(--pitch-secondary-channel-hue-scale)";
    public static readonly pitchSecondaryChannelSat: string = "var(--pitch-secondary-channel-sat)";
    public static readonly pitchSecondaryChannelSatScale: string = "var(--pitch-secondary-channel-sat-scale)";
    public static readonly pitchSecondaryChannelLum: string = "var(--pitch-secondary-channel-lum)";
    public static readonly pitchSecondaryChannelLumScale: string = "var(--pitch-secondary-channel-lum-scale)";
    public static readonly pitchPrimaryChannelHue: string = "var(--pitch-primary-channel-hue)";
    public static readonly pitchPrimaryChannelHueScale: string = "var(--pitch-primary-channel-hue-scale)";
    public static readonly pitchPrimaryChannelSat: string = "var(--pitch-primary-channel-sat)";
    public static readonly pitchPrimaryChannelSatScale: string = "var(--pitch-primary-channel-sat-scale)";
    public static readonly pitchPrimaryChannelLum: string = "var(--pitch-primary-channel-lum)";
    public static readonly pitchPrimaryChannelLumScale: string = "var(--pitch-primary-channel-lum-scale)";
    public static readonly pitchSecondaryNoteHue: string = "var(--pitch-secondary-note-hue)";
    public static readonly pitchSecondaryNoteHueScale: string = "var(--pitch-secondary-note-hue-scale)";
    public static readonly pitchSecondaryNoteSat: string = "var(--pitch-secondary-note-sat)";
    public static readonly pitchSecondaryNoteSatScale: string = "var(--pitch-secondary-note-sat-scale)";
    public static readonly pitchSecondaryNoteLum: string = "var(--pitch-secondary-note-lum)";
    public static readonly pitchSecondaryNoteLumScale: string = "var(--pitch-secondary-note-lum-scale)";
    public static readonly pitchPrimaryNoteHue: string = "var(--pitch-primary-note-hue)";
    public static readonly pitchPrimaryNoteHueScale: string = "var(--pitch-primary-note-hue-scale)";
    public static readonly pitchPrimaryNoteSat: string = "var(--pitch-primary-note-sat)";
    public static readonly pitchPrimaryNoteSatScale: string = "var(--pitch-primary-note-sat-scale)";
    public static readonly pitchPrimaryNoteLum: string = "var(--pitch-primary-note-lum)";
    public static readonly pitchPrimaryNoteLumScale: string = "var(--pitch-primary-note-lum-scale)";
    public static readonly modSecondaryChannelHue: string = "var(--mod-secondary-channel-hue)";
    public static readonly modSecondaryChannelHueScale: string = "var(--mod-secondary-channel-hue-scale)";
    public static readonly modSecondaryChannelSat: string = "var(--mod-secondary-channel-sat)";
    public static readonly modSecondaryChannelSatScale: string = "var(--mod-secondary-channel-sat-scale)";
    public static readonly modSecondaryChannelLum: string = "var(--mod-secondary-channel-lum)";
    public static readonly modSecondaryChannelLumScale: string = "var(--mod-secondary-channel-lum-scale)";
    public static readonly modPrimaryChannelHue: string = "var(--mod-primary-channel-hue)";
    public static readonly modPrimaryChannelHueScale: string = "var(--mod-primary-channel-hue-scale)";
    public static readonly modPrimaryChannelSat: string = "var(--mod-primary-channel-sat)";
    public static readonly modPrimaryChannelSatScale: string = "var(--mod-primary-channel-sat-scale)";
    public static readonly modPrimaryChannelLum: string = "var(--mod-primary-channel-lum)";
    public static readonly modPrimaryChannelLumScale: string = "var(--mod-primary-channel-lum-scale)";
    public static readonly modSecondaryNoteHue: string = "var(--mod-secondary-note-hue)";
    public static readonly modSecondaryNoteHueScale: string = "var(--mod-secondary-note-hue-scale)";
    public static readonly modSecondaryNoteSat: string = "var(--mod-secondary-note-sat)";
    public static readonly modSecondaryNoteSatScale: string = "var(--mod-secondary-note-sat-scale)";
    public static readonly modSecondaryNoteLum: string = "var(--mod-secondary-note-lum)";
    public static readonly modSecondaryNoteLumScale: string = "var(--mod-secondary-note-lum-scale)";
    public static readonly modPrimaryNoteHue: string = "var(--mod-primary-note-hue)";
    public static readonly modPrimaryNoteHueScale: string = "var(--mod-primary-note-hue-scale)";
    public static readonly modPrimaryNoteSat: string = "var(--mod-primary-note-sat)";
    public static readonly modPrimaryNoteSatScale: string = "var(--mod-primary-note-sat-scale)";
    public static readonly modPrimaryNoteLum: string = "var(--mod-primary-note-lum)";
    public static readonly modPrimaryNoteLumScale: string = "var(--mod-primary-note-lum-scale)";
    public static readonly noiseSecondaryChannelHue: string = "var(--noise-secondary-channel-hue)";
    public static readonly noiseSecondaryChannelHueScale: string = "var(--noise-secondary-channel-hue-scale)";
    public static readonly noiseSecondaryChannelSat: string = "var(--noise-secondary-channel-sat)";
    public static readonly noiseSecondaryChannelSatScale: string = "var(--noise-secondary-channel-sat-scale)";
    public static readonly noiseSecondaryChannelLum: string = "var(--noise-secondary-channel-lum)";
    public static readonly noiseSecondaryChannelLumScale: string = "var(--noise-secondary-channel-lum-scale)";
    public static readonly noisePrimaryChannelHue: string = "var(--noise-primary-channel-hue)";
    public static readonly noisePrimaryChannelHueScale: string = "var(--noise-primary-channel-hue-scale)";
    public static readonly noisePrimaryChannelSat: string = "var(--noise-primary-channel-sat)";
    public static readonly noisePrimaryChannelSatScale: string = "var(--noise-primary-channel-sat-scale)";
    public static readonly noisePrimaryChannelLum: string = "var(--noise-primary-channel-lum)";
    public static readonly noisePrimaryChannelLumScale: string = "var(--noise-primary-channel-lum-scale)";
    public static readonly noiseSecondaryNoteHue: string = "var(--noise-secondary-note-hue)";
    public static readonly noiseSecondaryNoteHueScale: string = "var(--noise-secondary-note-hue-scale)";
    public static readonly noiseSecondaryNoteSat: string = "var(--noise-secondary-note-sat)";
    public static readonly noiseSecondaryNoteSatScale: string = "var(--noise-secondary-note-sat-scale)";
    public static readonly noiseSecondaryNoteLum: string = "var(--noise-secondary-note-lum)";
    public static readonly noiseSecondaryNoteLumScale: string = "var(--noise-secondary-note-lum-scale)";
    public static readonly noisePrimaryNoteHue: string = "var(--noise-primary-note-hue)";
    public static readonly noisePrimaryNoteHueScale: string = "var(--noise-primary-note-hue-scale)";
    public static readonly noisePrimaryNoteSat: string = "var(--noise-primary-note-sat)";
    public static readonly noisePrimaryNoteSatScale: string = "var(--noise-primary-note-sat-scale)";
    public static readonly noisePrimaryNoteLum: string = "var(--noise-primary-note-lum)";
    public static readonly noisePrimaryNoteLumScale: string = "var(--noise-primary-note-lum-scale)";
    public static readonly trackEditorBgPitch: string = "var(--track-editor-bg-pitch)";
    public static readonly trackEditorBgPitchDim: string = "var(--track-editor-bg-pitch-dim)";
    public static readonly trackEditorBgNoise: string = "var(--track-editor-bg-noise)";
    public static readonly trackEditorBgNoiseDim: string = "var(--track-editor-bg-noise-dim)";
    public static readonly trackEditorBgMod: string = "var(--track-editor-bg-mod)";
    public static readonly trackEditorBgModDim: string = "var(--track-editor-bg-mod-dim)";
    public static readonly multiplicativeModSlider: string = "var(--multiplicative-mod-slider)";
    public static readonly overwritingModSlider: string = "var(--overwriting-mod-slider)";
    public static readonly indicatorPrimary: string = "var(--indicator-primary)";
    public static readonly indicatorSecondary: string = "var(--indicator-secondary)";
    public static readonly select2OptGroup: string = "var(--select2-opt-group)";
    public static readonly inputBoxOutline: string = "var(--input-box-outline)";
    public static readonly muteButtonNormal: string = "var(--mute-button-normal)";
    public static readonly muteButtonMod: string = "var(--mute-button-mod)";
    public static readonly modLabelPrimary: string = "var(--mod-label-primary)";
    public static readonly modLabelSecondaryText: string = "var(--mod-label-secondary-text)";
    public static readonly modLabelPrimaryText: string = "var(--mod-label-primary-text)";
    public static readonly disabledNotePrimary: string = "var(--disabled-note-primary)";
    public static readonly disabledNoteSecondary: string = "var(--disabled-note-secondary)";

    public static readonly pitchChannels: DictionaryArray<ChannelColors> = toNameMap([
        {
            name: "pitch1", // cyan
            secondaryChannel: "var(--pitch1-secondary-channel)",
            primaryChannel: "var(--pitch1-primary-channel)",
            secondaryNote: "var(--pitch1-secondary-note)",
            primaryNote: "var(--pitch1-primary-note)",
        }, {
            name: "pitch2", // yellow
            secondaryChannel: "var(--pitch2-secondary-channel)",
            primaryChannel: "var(--pitch2-primary-channel)",
            secondaryNote: "var(--pitch2-secondary-note)",
            primaryNote: "var(--pitch2-primary-note)",
        }, {
            name: "pitch3", // orange
            secondaryChannel: "var(--pitch3-secondary-channel)",
            primaryChannel: "var(--pitch3-primary-channel)",
            secondaryNote: "var(--pitch3-secondary-note)",
            primaryNote: "var(--pitch3-primary-note)",
        }, {
            name: "pitch4", // green
            secondaryChannel: "var(--pitch4-secondary-channel)",
            primaryChannel: "var(--pitch4-primary-channel)",
            secondaryNote: "var(--pitch4-secondary-note)",
            primaryNote: "var(--pitch4-primary-note)",
        }, {
            name: "pitch5", // magenta
            secondaryChannel: "var(--pitch5-secondary-channel)",
            primaryChannel: "var(--pitch5-primary-channel)",
            secondaryNote: "var(--pitch5-secondary-note)",
            primaryNote: "var(--pitch5-primary-note)",
        }, {
            name: "pitch6", // blue
            secondaryChannel: "var(--pitch6-secondary-channel)",
            primaryChannel: "var(--pitch6-primary-channel)",
            secondaryNote: "var(--pitch6-secondary-note)",
            primaryNote: "var(--pitch6-primary-note)",
        }, {
            name: "pitch7", // olive
            secondaryChannel: "var(--pitch7-secondary-channel)",
            primaryChannel: "var(--pitch7-primary-channel)",
            secondaryNote: "var(--pitch7-secondary-note)",
            primaryNote: "var(--pitch7-primary-note)",
        }, {
            name: "pitch8", // red
            secondaryChannel: "var(--pitch8-secondary-channel)",
            primaryChannel: "var(--pitch8-primary-channel)",
            secondaryNote: "var(--pitch8-secondary-note)",
            primaryNote: "var(--pitch8-primary-note)",
        }, {
            name: "pitch9", // teal
            secondaryChannel: "var(--pitch9-secondary-channel)",
            primaryChannel: "var(--pitch9-primary-channel)",
            secondaryNote: "var(--pitch9-secondary-note)",
            primaryNote: "var(--pitch9-primary-note)",
        }, {
            name: "pitch10", // purple
            secondaryChannel: "var(--pitch10-secondary-channel)",
            primaryChannel: "var(--pitch10-primary-channel)",
            secondaryNote: "var(--pitch10-secondary-note)",
            primaryNote: "var(--pitch10-primary-note)",
        },
    ]);
    public static readonly noiseChannels: DictionaryArray<ChannelColors> = toNameMap([
        {
            name: "noise1", // gray
            secondaryChannel: "var(--noise1-secondary-channel)",
            primaryChannel: "var(--noise1-primary-channel)",
            secondaryNote: "var(--noise1-secondary-note)",
            primaryNote: "var(--noise1-primary-note)",
        }, {
            name: "noise2", // brown
            secondaryChannel: "var(--noise2-secondary-channel)",
            primaryChannel: "var(--noise2-primary-channel)",
            secondaryNote: "var(--noise2-secondary-note)",
            primaryNote: "var(--noise2-primary-note)",
        }, {
            name: "noise3", // azure
            secondaryChannel: "var(--noise3-secondary-channel)",
            primaryChannel: "var(--noise3-primary-channel)",
            secondaryNote: "var(--noise3-secondary-note)",
            primaryNote: "var(--noise3-primary-note)",
        }, {
            name: "noise4", // purple
            secondaryChannel: "var(--noise4-secondary-channel)",
            primaryChannel: "var(--noise4-primary-channel)",
            secondaryNote: "var(--noise4-secondary-note)",
            primaryNote: "var(--noise4-primary-note)",
        }, {
            name: "noise5", // sage
            secondaryChannel: "var(--noise5-secondary-channel)",
            primaryChannel: "var(--noise5-primary-channel)",
            secondaryNote: "var(--noise5-secondary-note)",
            primaryNote: "var(--noise5-primary-note)",
        },
    ]);
    public static readonly modChannels: DictionaryArray<ChannelColors> = toNameMap([
        {
            name: "mod1",
            secondaryChannel: "var(--mod1-secondary-channel)",
            primaryChannel: "var(--mod1-primary-channel)",
            secondaryNote: "var(--mod1-secondary-note)",
            primaryNote: "var(--mod1-primary-note)",
        }, {
            name: "mod2",
            secondaryChannel: "var(--mod2-secondary-channel)",
            primaryChannel: "var(--mod2-primary-channel)",
            secondaryNote: "var(--mod2-secondary-note)",
            primaryNote: "var(--mod2-primary-note)",
        }, {
            name: "mod3",
            secondaryChannel: "var(--mod3-secondary-channel)",
            primaryChannel: "var(--mod3-primary-channel)",
            secondaryNote: "var(--mod3-secondary-note)",
            primaryNote: "var(--mod3-primary-note)",
        }, {
            name: "mod4",
            secondaryChannel: "var(--mod4-secondary-channel)",
            primaryChannel: "var(--mod4-primary-channel)",
            secondaryNote: "var(--mod4-secondary-note)",
            primaryNote: "var(--mod4-primary-note)",
        },
    ]);

    public static resetColors() {
        this.colorLookup.clear();
    }

    // Same as below, but won't return var colors
    public static getComputedChannelColor(song: Song, channel: number): ChannelColors {
        if (getComputedStyle(this._styleElement).getPropertyValue("--use-color-formula").trim() == "false") {
            let base: ChannelColors = ColorConfig.getChannelColor(song, channel);
            // Trim away "var(...)"
            var regex = /\(([^)]+)\)/;
            let newChannelSecondary: string = ColorConfig.getComputed((regex.exec(base.secondaryChannel) as RegExpExecArray)[1] as string);
            let newChannelPrimary: string = ColorConfig.getComputed((regex.exec(base.primaryChannel) as RegExpExecArray)[1] as string);
            let newNoteSecondary: string = ColorConfig.getComputed((regex.exec(base.secondaryNote) as RegExpExecArray)[1] as string);
            let newNotePrimary: string = ColorConfig.getComputed((regex.exec(base.primaryNote) as RegExpExecArray)[1] as string);
            return <ChannelColors>{ secondaryChannel: newChannelSecondary, primaryChannel: newChannelPrimary, secondaryNote: newNoteSecondary, primaryNote: newNotePrimary };
        }
        else {
            return ColorConfig.getChannelColor(song, channel);
        }
    };

    public static getChannelColor(song: Song, channel: number): ChannelColors {
        if (getComputedStyle(this._styleElement).getPropertyValue("--use-color-formula").trim() == "false") {
            // Set colors, not defined by formula
            if (channel < song.pitchChannelCount) {
                return ColorConfig.pitchChannels[channel % ColorConfig.pitchChannels.length];
            } else if (channel < song.pitchChannelCount + song.noiseChannelCount) {
                return ColorConfig.noiseChannels[(channel - song.pitchChannelCount) % ColorConfig.noiseChannels.length];
            } else {
                return ColorConfig.modChannels[(channel - song.pitchChannelCount - song.noiseChannelCount) % ColorConfig.modChannels.length];
            }
        }
        else {
            // Determine if color is cached
            if (ColorConfig.colorLookup.has(channel)) {
                return ColorConfig.colorLookup.get(channel) as ChannelColors;
            }
            else {
                // Formulaic color definition
                if (channel < song.pitchChannelCount) {
                    // Pitch formula
                    const pitchSecondaryChannelHue: number = +getComputedStyle(this._styleElement).getPropertyValue("--pitch-secondary-channel-hue");
                    const pitchSecondaryChannelHueScale: number = +getComputedStyle(this._styleElement).getPropertyValue("--pitch-secondary-channel-hue-scale");
                    const pitchSecondaryChannelSat: number = +getComputedStyle(this._styleElement).getPropertyValue("--pitch-secondary-channel-sat");
                    const pitchSecondaryChannelSatScale: number = +getComputedStyle(this._styleElement).getPropertyValue("--pitch-secondary-channel-sat-scale");
                    const pitchSecondaryChannelLum: number = +getComputedStyle(this._styleElement).getPropertyValue("--pitch-secondary-channel-lum");
                    const pitchSecondaryChannelLumScale: number = +getComputedStyle(this._styleElement).getPropertyValue("--pitch-secondary-channel-lum-scale");
                    const pitchPrimaryChannelHue: number = +getComputedStyle(this._styleElement).getPropertyValue("--pitch-primary-channel-hue");
                    const pitchPrimaryChannelHueScale: number = +getComputedStyle(this._styleElement).getPropertyValue("--pitch-primary-channel-hue-scale");
                    const pitchPrimaryChannelSat: number = +getComputedStyle(this._styleElement).getPropertyValue("--pitch-primary-channel-sat");
                    const pitchPrimaryChannelSatScale: number = +getComputedStyle(this._styleElement).getPropertyValue("--pitch-primary-channel-sat-scale");
                    const pitchPrimaryChannelLum: number = +getComputedStyle(this._styleElement).getPropertyValue("--pitch-primary-channel-lum");
                    const pitchPrimaryChannelLumScale: number = +getComputedStyle(this._styleElement).getPropertyValue("--pitch-primary-channel-lum-scale");
                    const pitchSecondaryNoteHue: number = +getComputedStyle(this._styleElement).getPropertyValue("--pitch-secondary-note-hue");
                    const pitchSecondaryNoteHueScale: number = +getComputedStyle(this._styleElement).getPropertyValue("--pitch-secondary-note-hue-scale");
                    const pitchSecondaryNoteSat: number = +getComputedStyle(this._styleElement).getPropertyValue("--pitch-secondary-note-sat");
                    const pitchSecondaryNoteSatScale: number = +getComputedStyle(this._styleElement).getPropertyValue("--pitch-secondary-note-sat-scale");
                    const pitchSecondaryNoteLum: number = +getComputedStyle(this._styleElement).getPropertyValue("--pitch-secondary-note-lum");
                    const pitchSecondaryNoteLumScale: number = +getComputedStyle(this._styleElement).getPropertyValue("--pitch-secondary-note-lum-scale");
                    const pitchPrimaryNoteHue: number = +getComputedStyle(this._styleElement).getPropertyValue("--pitch-primary-note-hue");
                    const pitchPrimaryNoteHueScale: number = +getComputedStyle(this._styleElement).getPropertyValue("--pitch-primary-note-hue-scale");
                    const pitchPrimaryNoteSat: number = +getComputedStyle(this._styleElement).getPropertyValue("--pitch-primary-note-sat");
                    const pitchPrimaryNoteSatScale: number = +getComputedStyle(this._styleElement).getPropertyValue("--pitch-primary-note-sat-scale");
                    const pitchPrimaryNoteLum: number = +getComputedStyle(this._styleElement).getPropertyValue("--pitch-primary-note-lum");
                    const pitchPrimaryNoteLumScale: number = +getComputedStyle(this._styleElement).getPropertyValue("--pitch-primary-note-lum-scale");

                    let newChannelSecondary: string = "hsl(" + ((+pitchSecondaryChannelHue + (channel * +pitchSecondaryChannelHueScale / Config.pitchChannelCountMax) * 256) % 256) + ","
                        + (+pitchSecondaryChannelSat * (1 - (+pitchSecondaryChannelSatScale * Math.floor(channel / 7)))) + "%,"
                        + (+pitchSecondaryChannelLum * (1 - (+pitchSecondaryChannelLumScale * Math.floor(channel / 7)))) + "%)";
                    let newChannelPrimary: string = "hsl(" + ((+pitchPrimaryChannelHue + (channel * +pitchPrimaryChannelHueScale / Config.pitchChannelCountMax) * 256) % 256) + ","
                        + (+pitchPrimaryChannelSat * (1 - (+pitchPrimaryChannelSatScale * Math.floor(channel / 7)))) + "%,"
                        + (+pitchPrimaryChannelLum * (1 - (+pitchPrimaryChannelLumScale * Math.floor(channel / 7)))) + "%)";
                    let newNoteSecondary: string = "hsl(" + ((+pitchSecondaryNoteHue + (channel * +pitchSecondaryNoteHueScale / Config.pitchChannelCountMax) * 256) % 256) + ","
                        + (+pitchSecondaryNoteSat * (1 - (+pitchSecondaryNoteSatScale * Math.floor(channel / 7)))) + "%,"
                        + (+pitchSecondaryNoteLum * (1 - (+pitchSecondaryNoteLumScale * Math.floor(channel / 7)))) + "%)";
                    let newNotePrimary: string = "hsl(" + ((+pitchPrimaryNoteHue + (channel * +pitchPrimaryNoteHueScale / Config.pitchChannelCountMax) * 256) % 256) + ","
                        + (+pitchPrimaryNoteSat * (1 - (+pitchPrimaryNoteSatScale * Math.floor(channel / 7)))) + "%,"
                        + (+pitchPrimaryNoteLum * (1 - (+pitchPrimaryNoteLumScale * Math.floor(channel / 7)))) + "%)";

                    let newChannelColors = <ChannelColors>{ secondaryChannel: newChannelSecondary, primaryChannel: newChannelPrimary, secondaryNote: newNoteSecondary, primaryNote: newNotePrimary };
                    ColorConfig.colorLookup.set(channel, newChannelColors);
                    return newChannelColors;

                }
                else if (channel < song.pitchChannelCount + song.noiseChannelCount) {
                    // Noise formula
                    const noiseSecondaryChannelHue: number = +getComputedStyle(this._styleElement).getPropertyValue("--noise-secondary-channel-hue");
                    const noiseSecondaryChannelHueScale: number = +getComputedStyle(this._styleElement).getPropertyValue("--noise-secondary-channel-hue-scale");
                    const noiseSecondaryChannelSat: number = +getComputedStyle(this._styleElement).getPropertyValue("--noise-secondary-channel-sat");
                    const noiseSecondaryChannelSatScale: number = +getComputedStyle(this._styleElement).getPropertyValue("--noise-secondary-channel-sat-scale");
                    const noiseSecondaryChannelLum: number = +getComputedStyle(this._styleElement).getPropertyValue("--noise-secondary-channel-lum");
                    const noiseSecondaryChannelLumScale: number = +getComputedStyle(this._styleElement).getPropertyValue("--noise-secondary-channel-lum-scale");
                    const noisePrimaryChannelHue: number = +getComputedStyle(this._styleElement).getPropertyValue("--noise-primary-channel-hue");
                    const noisePrimaryChannelHueScale: number = +getComputedStyle(this._styleElement).getPropertyValue("--noise-primary-channel-hue-scale");
                    const noisePrimaryChannelSat: number = +getComputedStyle(this._styleElement).getPropertyValue("--noise-primary-channel-sat");
                    const noisePrimaryChannelSatScale: number = +getComputedStyle(this._styleElement).getPropertyValue("--noise-primary-channel-sat-scale");
                    const noisePrimaryChannelLum: number = +getComputedStyle(this._styleElement).getPropertyValue("--noise-primary-channel-lum");
                    const noisePrimaryChannelLumScale: number = +getComputedStyle(this._styleElement).getPropertyValue("--noise-primary-channel-lum-scale");
                    const noiseSecondaryNoteHue: number = +getComputedStyle(this._styleElement).getPropertyValue("--noise-secondary-note-hue");
                    const noiseSecondaryNoteHueScale: number = +getComputedStyle(this._styleElement).getPropertyValue("--noise-secondary-note-hue-scale");
                    const noiseSecondaryNoteSat: number = +getComputedStyle(this._styleElement).getPropertyValue("--noise-secondary-note-sat");
                    const noiseSecondaryNoteSatScale: number = +getComputedStyle(this._styleElement).getPropertyValue("--noise-secondary-note-sat-scale");
                    const noiseSecondaryNoteLum: number = +getComputedStyle(this._styleElement).getPropertyValue("--noise-secondary-note-lum");
                    const noiseSecondaryNoteLumScale: number = +getComputedStyle(this._styleElement).getPropertyValue("--noise-secondary-note-lum-scale");
                    const noisePrimaryNoteHue: number = +getComputedStyle(this._styleElement).getPropertyValue("--noise-primary-note-hue");
                    const noisePrimaryNoteHueScale: number = +getComputedStyle(this._styleElement).getPropertyValue("--noise-primary-note-hue-scale");
                    const noisePrimaryNoteSat: number = +getComputedStyle(this._styleElement).getPropertyValue("--noise-primary-note-sat");
                    const noisePrimaryNoteSatScale: number = +getComputedStyle(this._styleElement).getPropertyValue("--noise-primary-note-sat-scale");
                    const noisePrimaryNoteLum: number = +getComputedStyle(this._styleElement).getPropertyValue("--noise-primary-note-lum");
                    const noisePrimaryNoteLumScale: number = +getComputedStyle(this._styleElement).getPropertyValue("--noise-primary-note-lum-scale");

                    let newChannelSecondary: string = "hsl(" + ((+noiseSecondaryChannelHue + (((channel - song.pitchChannelCount) * +noiseSecondaryChannelHueScale) / Config.noiseChannelCountMax) * 256) % 256) + ","
                        + (+noiseSecondaryChannelSat + channel * +noiseSecondaryChannelSatScale) + "%,"
                        + (+noiseSecondaryChannelLum + channel * +noiseSecondaryChannelLumScale) + "%)";
                    let newChannelPrimary: string = "hsl(" + ((+noisePrimaryChannelHue + (((channel - song.pitchChannelCount) * +noisePrimaryChannelHueScale) / Config.noiseChannelCountMax) * 256) % 256) + ","
                        + (+noisePrimaryChannelSat + channel * +noisePrimaryChannelSatScale) + "%,"
                        + (+noisePrimaryChannelLum + channel * +noisePrimaryChannelLumScale) + "%)";
                    let newNoteSecondary: string = "hsl(" + ((+noiseSecondaryNoteHue + (((channel - song.pitchChannelCount) * +noiseSecondaryNoteHueScale) / Config.noiseChannelCountMax) * 256) % 256) + ","
                        + (+noiseSecondaryNoteSat + channel * +noiseSecondaryNoteSatScale) + "%,"
                        + (+noiseSecondaryNoteLum + channel * +noiseSecondaryNoteLumScale) + "%)";
                    let newNotePrimary: string = "hsl(" + ((+noisePrimaryNoteHue + (((channel - song.pitchChannelCount) * +noisePrimaryNoteHueScale) / Config.noiseChannelCountMax) * 256) % 256) + ","
                        + (+noisePrimaryNoteSat + channel * +noisePrimaryNoteSatScale) + "%,"
                        + (+noisePrimaryNoteLum + channel * +noisePrimaryNoteLumScale) + "%)";

                    let newChannelColors = <ChannelColors>{ secondaryChannel: newChannelSecondary, primaryChannel: newChannelPrimary, secondaryNote: newNoteSecondary, primaryNote: newNotePrimary };
                    ColorConfig.colorLookup.set(channel, newChannelColors);
                    return newChannelColors;
                }
                else {
                    // Mod formula
                    const modSecondaryChannelHue: number = +getComputedStyle(this._styleElement).getPropertyValue("--mod-secondary-channel-hue");
                    const modSecondaryChannelHueScale: number = +getComputedStyle(this._styleElement).getPropertyValue("--mod-secondary-channel-hue-scale");
                    const modSecondaryChannelSat: number = +getComputedStyle(this._styleElement).getPropertyValue("--mod-secondary-channel-sat");
                    const modSecondaryChannelSatScale: number = +getComputedStyle(this._styleElement).getPropertyValue("--mod-secondary-channel-sat-scale");
                    const modSecondaryChannelLum: number = +getComputedStyle(this._styleElement).getPropertyValue("--mod-secondary-channel-lum");
                    const modSecondaryChannelLumScale: number = +getComputedStyle(this._styleElement).getPropertyValue("--mod-secondary-channel-lum-scale");
                    const modPrimaryChannelHue: number = +getComputedStyle(this._styleElement).getPropertyValue("--mod-primary-channel-hue");
                    const modPrimaryChannelHueScale: number = +getComputedStyle(this._styleElement).getPropertyValue("--mod-primary-channel-hue-scale");
                    const modPrimaryChannelSat: number = +getComputedStyle(this._styleElement).getPropertyValue("--mod-primary-channel-sat");
                    const modPrimaryChannelSatScale: number = +getComputedStyle(this._styleElement).getPropertyValue("--mod-primary-channel-sat-scale");
                    const modPrimaryChannelLum: number = +getComputedStyle(this._styleElement).getPropertyValue("--mod-primary-channel-lum");
                    const modPrimaryChannelLumScale: number = +getComputedStyle(this._styleElement).getPropertyValue("--mod-primary-channel-lum-scale");
                    const modSecondaryNoteHue: number = +getComputedStyle(this._styleElement).getPropertyValue("--mod-secondary-note-hue");
                    const modSecondaryNoteHueScale: number = +getComputedStyle(this._styleElement).getPropertyValue("--mod-secondary-note-hue-scale");
                    const modSecondaryNoteSat: number = +getComputedStyle(this._styleElement).getPropertyValue("--mod-secondary-note-sat");
                    const modSecondaryNoteSatScale: number = +getComputedStyle(this._styleElement).getPropertyValue("--mod-secondary-note-sat-scale");
                    const modSecondaryNoteLum: number = +getComputedStyle(this._styleElement).getPropertyValue("--mod-secondary-note-lum");
                    const modSecondaryNoteLumScale: number = +getComputedStyle(this._styleElement).getPropertyValue("--mod-secondary-note-lum-scale");
                    const modPrimaryNoteHue: number = +getComputedStyle(this._styleElement).getPropertyValue("--mod-primary-note-hue");
                    const modPrimaryNoteHueScale: number = +getComputedStyle(this._styleElement).getPropertyValue("--mod-primary-note-hue-scale");
                    const modPrimaryNoteSat: number = +getComputedStyle(this._styleElement).getPropertyValue("--mod-primary-note-sat");
                    const modPrimaryNoteSatScale: number = +getComputedStyle(this._styleElement).getPropertyValue("--mod-primary-note-sat-scale");
                    const modPrimaryNoteLum: number = +getComputedStyle(this._styleElement).getPropertyValue("--mod-primary-note-lum");
                    const modPrimaryNoteLumScale: number = +getComputedStyle(this._styleElement).getPropertyValue("--mod-primary-note-lum-scale");

                    let newChannelSecondary: string = "hsl(" + ((+modSecondaryChannelHue + (((channel - song.pitchChannelCount - song.noiseChannelCount) * +modSecondaryChannelHueScale) / Config.modChannelCountMax) * 256) % 256) + ","
                        + (+modSecondaryChannelSat + channel * +modSecondaryChannelSatScale) + "%,"
                        + (+modSecondaryChannelLum + channel * +modSecondaryChannelLumScale) + "%)";
                    let newChannelPrimary: string = "hsl(" + ((+modPrimaryChannelHue + (((channel - song.pitchChannelCount - song.noiseChannelCount) * +modPrimaryChannelHueScale) / Config.modChannelCountMax) * 256) % 256) + ","
                        + (+modPrimaryChannelSat + channel * +modPrimaryChannelSatScale) + "%,"
                        + (+modPrimaryChannelLum + channel * +modPrimaryChannelLumScale) + "%)";
                    let newNoteSecondary: string = "hsl(" + ((+modSecondaryNoteHue + (((channel - song.pitchChannelCount - song.noiseChannelCount) * +modSecondaryNoteHueScale) / Config.modChannelCountMax) * 256) % 256) + ","
                        + (+modSecondaryNoteSat + channel * +modSecondaryNoteSatScale) + "%,"
                        + (+modSecondaryNoteLum + channel * +modSecondaryNoteLumScale) + "%)";
                    let newNotePrimary: string = "hsl(" + ((+modPrimaryNoteHue + (((channel - song.pitchChannelCount - song.noiseChannelCount) * +modPrimaryNoteHueScale) / Config.modChannelCountMax) * 256) % 256) + ","
                        + (+modPrimaryNoteSat + channel * +modPrimaryNoteSatScale) + "%,"
                        + (+modPrimaryNoteLum + channel * +modPrimaryNoteLumScale) + "%)";

                    let newChannelColors = <ChannelColors>{ secondaryChannel: newChannelSecondary, primaryChannel: newChannelPrimary, secondaryNote: newNoteSecondary, primaryNote: newNotePrimary };
                    ColorConfig.colorLookup.set(channel, newChannelColors);
                    return newChannelColors;
                }
            }
        }
    }

    private static readonly _styleElement: HTMLStyleElement = document.head.appendChild(HTML.style({ type: "text/css" }));

    public static setTheme(name: string): void {
        this._styleElement.textContent = this.themes[name];

        const themeColor = <HTMLMetaElement>document.querySelector("meta[name='theme-color']");
        if (themeColor != null) {
            themeColor.setAttribute("content", getComputedStyle(document.documentElement).getPropertyValue('--ui-widget-background'));
        }

        this.resetColors();
    }

    public static getComputed(name: string): string {
        return getComputedStyle(this._styleElement).getPropertyValue(name);
    }
}
