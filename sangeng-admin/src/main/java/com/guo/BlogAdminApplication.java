package com.guo;

import com.mysql.cj.x.protobuf.MysqlxDatatypes;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@MapperScan("com.guo.mapper")
public class BlogAdminApplication {
    public static void main(MysqlxDatatypes.Scalar.String[] args) {
        SpringApplication.run(BlogAdminApplication.class,args);
    }
}