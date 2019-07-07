aws s3 mb s3://sam-first-bucket-arunm

aws cloudformation package --s3-bucket sam-first-bucket-arunm --template-file template.yml --output-template-file gen/template-generated.yml

aws cloudformation deploy --template-file /home/arunm/personal/aws/code/sam/gen/template-generated.yml --stack-name sam-first-app \
--capabilities=CAPABILITY_IAM