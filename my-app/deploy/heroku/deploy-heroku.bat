rem 分發到 heroku
rem 1.ng build時, 要加入 base-href
rem   EX: ng build --aot --prod --base-href=/my-app/
rem 2.複製 compost.json到 dist 目錄
rem 3.複製 index.php 到 dist 目錄
rem 4.若未執行, 則要執行 heroku login
rem 5. 若已有上傳過, 要執行 git merge master --allow-unrelated-histories
rem 
rem 
rem 

call npm run build:prod

copy .\deploy\heroku\compose.json .\dist
copy .\deploy\heroku\index.php .\dist

rem #若未登入,則要
rem # heroku login

cd dist
git init
heroku git:remote -a ng-app-20200220
git add *
git commit -m "init"

rem # 若已有上傳過
git pull heroku master --allow-unrelated-histories
git merge master --allow-unrelated-histories
git push heroku master