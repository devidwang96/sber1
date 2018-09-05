<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\TestModel;

class TestController extends Controller
{
    public function index()
    {
        $news = TestModel::all();

        return $news;
    }
}
