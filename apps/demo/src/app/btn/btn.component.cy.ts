import { TestBed } from '@angular/core/testing';
import { BtnComponent } from './btn.component';

describe(BtnComponent.name, () => {

  beforeEach(() => {
    TestBed.overrideComponent(BtnComponent, {
      add: { 
        imports: [],
        providers: []
      }
    }) 
  })

  it('renders', () => {
     cy.mount(BtnComponent,);
  })

})
