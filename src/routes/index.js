// ======================================================
// README
// ======================================================
// label = text to display in navigation
// to = appRoute url
// exact =
// showInNavigation = flag to show or hide in navigation
// active = flag to put in router

import { Home, ProjectInfo } from '../screens';

const createAppRoute = ({
  label,
  path,
  exact = true,
  showInNavigation = true,
  active = true,
  component
}) => ({
  label,
  to: path,
  exact,
  showInNavigation,
  active,
  component
});

export default [
  createAppRoute({ label: 'home', path: '/', component: Home }),
  createAppRoute({
    label: 'projectInfo',
    path: '/project-info',
    component: ProjectInfo
  }),
  createAppRoute({
    label: 'made from her',
    path: '/made-from-her',
    component: ProjectInfo
  }),
  createAppRoute({
    label: 'master plan',
    path: '/master-plan',
    component: ProjectInfo
  }),
  createAppRoute({
    label: 'room type',
    path: '/room-type',
    component: ProjectInfo
  }),
  createAppRoute({
    label: 'gallery',
    path: '/gallery',
    component: ProjectInfo
  }),
  createAppRoute({
    label: 'location',
    path: '/location',
    component: ProjectInfo
  }),
  createAppRoute({
    label: 'about us',
    path: '/about-us',
    component: ProjectInfo
  })
];
