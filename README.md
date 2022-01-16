# DAaaS-portal-frontend-csr

React SPA Front-end 기본 구조
* React v17
* Typescript v4.4
* ESLint v7
* Jest v27
* Webpack v5
* Storybook v6
* Docker + NGINX

# Yarn Scripts

```bash
yarn dev
 - 개발 서버 실행

yarn build
 - 프로덕션 빌드 파일 생성

yarn test
 - Jest 단위 테스트

yarn lint
 - ESLint 검증

yarn lint.fix
 - Eslint 검증 후 수정 가능한 파일 수정
 
yarn storybook
 - Storybook 개발 서버 실행
 
yarn build-storybook
 - Storybook Static File 빌드

yarn pm2:start
 - build된 파일로 Node daemon process manager 실행 
 - docker-compose + NGINX에 이용
```
