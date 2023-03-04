import { Component, Input } from '@angular/core';
import { Class, ClassModel, ConfigModel } from 'src/app/models';
import { ClassService } from 'src/app/services/class.service';
import { ConfigurationService } from 'src/app/services/configuration.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent {
  classes: Class[] = [];
  class1:ClassModel;

  constructor(private configService: ConfigurationService, private classService: ClassService) {}

ngOnInit(): void {
  this.configService.getConfig().subscribe((config) => {
    this.classes = config.classes;
  });
  this.classService.getClasses().subscribe(class1 => {
    this.class1 = class1;
  });
}
}
