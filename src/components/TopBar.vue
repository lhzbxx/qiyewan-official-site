<template>
    <div id="top-bar">
        <el-row style="height: 36px;">
            <el-col :span="8">
                <el-dropdown trigger="click" style="cursor: pointer;">
                    <span class="el-dropdown-link">
                        上海 <i class="el-icon-caret-bottom el-icon-right"></i>
                        </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>北京</el-dropdown-item>
                        <el-dropdown-item>上海</el-dropdown-item>
                        <el-dropdown-item>成都</el-dropdown-item>
                        <el-dropdown-item>镇江</el-dropdown-item>
                        <el-dropdown-item>广州</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-col>
        </el-row>
    </div>
</template>