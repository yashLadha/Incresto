import { Component, OnInit } from '@angular/core';
import { SKILL_LIST } from '../shared/SkList';
import { SkillDetail } from '../shared/skillList';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  skills: SkillDetail[];

  constructor() {
    this.skills = SKILL_LIST;
  }

  ngOnInit() {
  }

}
