const routes: Routes = [
  { path: 'add-trip', component: AddTripComponent },
  { path: 'edit-trip', component: EditTripComponent },
  { path: 'login', component: LoginComponent },
  { path: 'list-trips', component: TripListingComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' }
]
