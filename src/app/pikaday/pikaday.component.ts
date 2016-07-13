
import { Component } from '@angular/core';

//Place this at the top near your imports
/// <reference path="../../../typings/globals/pikaday/index.d.ts" />
declare var Pikaday; //unsure how to initialized with property 'field'

/// <reference path="../../../typings/globals/underscore/index.d.ts" />
declare var _;


@Component({
  moduleId: module.id,
  selector: 'app-pikaday',
  templateUrl: 'pikaday.component.html',
  styleUrls: ['pikaday.component.css']
})

export class PikadayComponent {
  _.each([1, 2, 3], alert);
}
