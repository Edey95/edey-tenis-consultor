<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      border
      fit
      highlight-current-row
      :data="
        resData.filter(
          (data) =>
            !search || data.player.toLowerCase().includes(search.toLowerCase())
        )
      "
      style="width: 100%"
    >
      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="Type to search" />
        </template>
      </el-table-column>
      <el-table-column label="Rank" prop="ranking"> </el-table-column>
      <el-table-column label="Name" prop="player"> </el-table-column>
      <el-table-column label="Country" prop="country"> </el-table-column>
      <el-table-column label="Age" prop="age"> </el-table-column>
      <el-table-column label="Points" prop="points"> </el-table-column>
      <el-table-column label="Tournament" prop="tournaments_played">
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      listLoading: true,
      resData: null,
      search: "",
      list: null,
      total: 0,
      listQuery: {
        page: 1,
        limit: 20,
        importance: undefined,
        title: undefined,
        type: undefined,
        sort: "+ranking",
      },
    };
  },
  mounted() {
    const axiosInstance = axios.create({
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
    axiosInstance
      .get("https://tennis-api-master.vercel.app/api/atp/rankings/singles")
      .then((response) => {
        this.resData = response.data;
        this.list = response.data.items
        this.total = response.data.total
      })
      .catch((e) => alert(e));
    this.listLoading = false;
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    handleSizeChange(val) {
      console.log(`${val} items per page`);
    },
    handleCurrentChange(val) {
      console.log(`current page: ${val}`);
    },
  },
};
</script>