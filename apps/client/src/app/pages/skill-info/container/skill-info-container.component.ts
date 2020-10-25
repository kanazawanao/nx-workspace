import { SkillsService } from '../skills.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'client-skill-info-container',
  templateUrl: './skill-info-container.component.html',
  styleUrls: ['./skill-info-container.component.scss'],
})
export class SkillInfoContainerComponent implements OnInit {
  constructor(private skillsService: SkillsService) {}

  ngOnInit(): void {
    this.skillsService.fetchInitData();
  }
}
