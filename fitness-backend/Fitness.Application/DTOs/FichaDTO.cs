using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Fitness.Application.DTOs
{
    public class FichaDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Idade { get; set; }
        public double Peso { get; set; }
        public double Altura { get; set; }
        public int Serie { get; set; }
        public int Repeticao { get; set; }

        [JsonIgnore]
        public ICollection<ExerciciosDTO> Exercicios{ get; set; }
        public DateTime Created_at { get; set; }
        public DateTime Deleted_at{ get; set; }
        public DateTime Updated_at { get; set; }
    }
}