<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class trainersTableRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'sort' => ['nullable', 'string'],
            'filter' => ['nullable', 'array'],
            'filter.created_from' => ['nullable', 'date_format:' . config('app.date_format')],
            'filter.created_till' => ['nullable', 'date_format:' . config('app.date_format')],
            'filter.email' => ['nullable', 'string'],
        ];
    }
}
