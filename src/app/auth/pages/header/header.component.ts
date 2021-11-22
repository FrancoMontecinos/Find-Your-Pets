import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy, AfterViewInit {


  constructor(
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
  }

  /*showModal(){
      const modalStatic = this.modalService.open(FormIngresoFeriadosLegalesComponent, {
        size: 'lg',
        backdrop: 'static'
      });
      if (!isNullOrUndefined(event)) {
        modalStatic.componentInstance.idSolitudPortal = event.id;
      }
      modalStatic.componentInstance.annio = this.anio;
      modalStatic.componentInstance.readonly = true;
      modalStatic.componentInstance.isModal = true;
      modalStatic.componentInstance.funcionario = this.empleado;
      modalStatic.componentInstance.closeModal.subscribe((result: boolean) => {
        this.buscarSolicitudes();
      })
  }*/
}
