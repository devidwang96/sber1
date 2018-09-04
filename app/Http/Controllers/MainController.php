<?php

namespace App\Http\Controllers;

use Mcamara\LaravelLocalization\Facades\LaravelLocalization;
use Illuminate\Http\Request;

class MainController extends Controller
{
    public function index()
    {
        if (url('/') == mb_substr(LaravelLocalization::getNonLocalizedURL(request()->path()), 0, -1))
            return redirect(LaravelLocalization::localizeURL('home', app()->getLocale()));

        return view('welcome');
    }
}
