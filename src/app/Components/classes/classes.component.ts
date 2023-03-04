import { Component, Input } from '@angular/core';
import { Class, ClassModel, ClassWithStats, ConfigModel } from 'src/app/models';
import { ClassService } from 'src/app/services/class.service';
import { ConfigurationService } from 'src/app/services/configuration.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent {
  classesWithStats: ClassWithStats[] = [];

  constructor(private configService: ConfigurationService, private classService: ClassService) {}

  ngOnInit(): void {
    this.configService.getConfig().subscribe((config) => {
      const classes = config.classes;
      this.classService.getClasses().subscribe((classModels) => {
        this.classesWithStats = classes.map((classItem) => {
          const classModel = classModels.find((model) => model.id === classItem.id);
          return { ...classItem, ...classModel };
        });
      });
    });

    this.classService.getClasses().subscribe((models) => {
      for (let i = 0; i < models.length; i++) {
        this.classesWithStats[i].owned = models[i].owned;
        this.classesWithStats[i].used = models[i].used;
        this.classesWithStats[i].kills = models[i].kills;
        this.classesWithStats[i].deaths = models[i].deaths;
      }
    });
}
}
